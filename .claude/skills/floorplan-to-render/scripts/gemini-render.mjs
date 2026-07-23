#!/usr/bin/env node
// Calls the Gemini API directly to generate an image. No Higgsfield involved.
// Usage:
//   node gemini-render.mjs --prompt "..." --out out.png [--image ref1.png --image ref2.jpg] [--model gemini-3-pro-image-preview] [--aspect-ratio 16:9]
//
// Requires GEMINI_API_KEY in the environment. Get one at https://aistudio.google.com/apikey

import { readFileSync, writeFileSync } from "node:fs";
import { extname } from "node:path";

function parseArgs(argv) {
  const args = { images: [] };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--prompt") args.prompt = argv[++i];
    else if (arg === "--out") args.out = argv[++i];
    else if (arg === "--image") args.images.push(argv[++i]);
    else if (arg === "--model") args.model = argv[++i];
    else if (arg === "--aspect-ratio") args.aspectRatio = argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

function mimeTypeFor(path) {
  const ext = extname(path).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  throw new Error(`Unsupported reference image type: ${ext}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.prompt) throw new Error("--prompt is required");
  if (!args.out) throw new Error("--out is required");

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it as an environment variable for this environment, then start a new session."
    );
  }

  const model = args.model || process.env.GEMINI_IMAGE_MODEL || "gemini-3-pro-image-preview";

  const parts = [{ text: args.prompt }];
  for (const imagePath of args.images) {
    const data = readFileSync(imagePath).toString("base64");
    parts.push({ inline_data: { mime_type: mimeTypeFor(imagePath), data } });
  }

  const body = {
    contents: [{ parts }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      ...(args.aspectRatio ? { imageConfig: { aspectRatio: args.aspectRatio } } : {}),
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${errText}`);
  }

  const json = await res.json();
  const imagePart = json?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData || p.inline_data);
  const inline = imagePart?.inlineData || imagePart?.inline_data;
  if (!inline?.data) {
    throw new Error(`No image returned by Gemini. Full response: ${JSON.stringify(json)}`);
  }

  writeFileSync(args.out, Buffer.from(inline.data, "base64"));
  console.log(`Wrote ${args.out}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

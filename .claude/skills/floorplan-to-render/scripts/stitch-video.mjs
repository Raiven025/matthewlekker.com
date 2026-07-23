#!/usr/bin/env node
// Concatenates ordered room-walkthrough clips (local files or https URLs) into one
// continuous property video, with an optional crossfade between rooms. No Higgsfield
// or other MCP tool does this — it runs locally via a system ffmpeg/ffprobe install.
//
// Usage:
//   node stitch-video.mjs --clip room1.mp4 --clip room2.mp4 --clip room3.mp4 \
//     --out walkthrough.mp4 [--crossfade 0.75] [--width 1920] [--height 1080]
//
// Requires ffmpeg + ffprobe on PATH (e.g. `apt-get install -y ffmpeg` on Debian/Ubuntu).
// Override the binaries with FFMPEG_PATH / FFPROBE_PATH env vars if they aren't on PATH.

import { execFileSync } from "node:child_process";

const ffmpegPath = process.env.FFMPEG_PATH || "ffmpeg";
const ffprobePath = process.env.FFPROBE_PATH || "ffprobe";

function parseArgs(argv) {
  const args = { clips: [], crossfade: 0, width: 1920, height: 1080 };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--clip") args.clips.push(argv[++i]);
    else if (arg === "--out") args.out = argv[++i];
    else if (arg === "--crossfade") args.crossfade = parseFloat(argv[++i]);
    else if (arg === "--width") args.width = parseInt(argv[++i], 10);
    else if (arg === "--height") args.height = parseInt(argv[++i], 10);
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

function getDuration(input) {
  const out = execFileSync(ffprobePath, [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1",
    input,
  ]).toString().trim();
  const seconds = parseFloat(out);
  if (!Number.isFinite(seconds)) {
    throw new Error(`Could not read duration for ${input}`);
  }
  return seconds;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.clips.length < 1) throw new Error("At least one --clip is required");
  if (!args.out) throw new Error("--out is required");

  const scaled = args.clips.map((_, i) =>
    `[${i}:v]scale=${args.width}:${args.height}:force_original_aspect_ratio=decrease,` +
    `pad=${args.width}:${args.height}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30[v${i}]`
  );

  let filterComplex;
  let finalLabel;

  if (args.clips.length === 1 || args.crossfade <= 0) {
    const inputs = args.clips.map((_, i) => `[v${i}]`).join("");
    filterComplex = [...scaled, `${inputs}concat=n=${args.clips.length}:v=1:a=0[vout]`].join(";");
    finalLabel = "vout";
  } else {
    const durations = args.clips.map(getDuration);
    const xfades = [];
    let prevLabel = "v0";
    let cumulative = durations[0];
    for (let i = 1; i < args.clips.length; i++) {
      const outLabel = i === args.clips.length - 1 ? "vout" : `vx${i}`;
      const offset = Math.max(cumulative - args.crossfade, 0);
      xfades.push(
        `[${prevLabel}][v${i}]xfade=transition=fade:duration=${args.crossfade}:offset=${offset.toFixed(3)}[${outLabel}]`
      );
      cumulative = cumulative + durations[i] - args.crossfade;
      prevLabel = outLabel;
    }
    filterComplex = [...scaled, ...xfades].join(";");
    finalLabel = "vout";
  }

  const ffmpegArgs = [
    "-y",
    ...args.clips.flatMap((clip) => ["-i", clip]),
    "-filter_complex", filterComplex,
    "-map", `[${finalLabel}]`,
    "-c:v", "libx264",
    "-crf", "18",
    "-preset", "medium",
    "-pix_fmt", "yuv420p",
    args.out,
  ];

  execFileSync(ffmpegPath, ffmpegArgs, { stdio: "inherit" });
  console.log(`Wrote ${args.out}`);
}

main();

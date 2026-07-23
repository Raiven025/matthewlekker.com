---
name: floorplan-to-render
description: Turn an uploaded 2D floor plan into a 3D "dollhouse" floor plan visualization and/or ultra-realistic photoreal renders of each room, using client-specified materials, furniture, and style. Use whenever a floor plan, blueprint, or building layout is uploaded and the user wants a 3D floor plan, room renderings, interior visualization, staging preview, or architectural rendering from it.
---

# Floor Plan → 3D Render Workflow

Converts a 2D floor plan (photo, scan, or PDF export) into:
1. A 3D isometric "dollhouse" floor plan image, and/or
2. Ultra-realistic, photograph-quality renders of each individual room, styled with the
   client's chosen materials and furniture.

This is a marketing / pre-visualization / client-presentation tool — a natural add-on for
real-estate and architectural photography clients who want to show a space before it's
staged, renovated, or built. **It is not CAD-accurate.** Room proportions and openings are
preserved from the source plan, but dimensions are not construction-grade. Say so if asked.

## Tools used

- `scripts/gemini-render.mjs` — calls the Gemini API directly for **every** image generated
  by this skill (the 3D dollhouse render and each room render). Requires `GEMINI_API_KEY`
  in the environment (see "Setup" below).
- `AskUserQuestion` — collect style/material/furniture/output-mode choices up front
- `SendUserFile` — deliver the final set

**Never use Higgsfield (or any `mcp__Higgsfield__*` tool) for images in this skill.**
Higgsfield is reserved strictly for video work elsewhere in this project — not photos,
not renders, not the 3D floor plan. All rendering here goes through Gemini.

There is no interactive-3D/GLB step in this workflow — that required a mesh-generation
tool this skill deliberately does not use. Output is the 2D dollhouse-style image only.

## Setup

1. Get a Gemini API key at https://aistudio.google.com/apikey.
2. Add it as an environment variable named `GEMINI_API_KEY` for this environment (do not
   paste the key into chat). A new session is needed for the variable to be visible.
3. Optionally set `GEMINI_IMAGE_MODEL` to override the default model
   (`gemini-3-pro-image-preview`) — e.g. drop to `gemini-2.5-flash-image` if Pro access
   isn't available.
4. Run the script from the repo root:
   ```
   node .claude/skills/floorplan-to-render/scripts/gemini-render.mjs \
     --prompt "..." \
     --image path/to/floorplan.jpg \
     --out path/to/output.png \
     --aspect-ratio 16:9
   ```
   `--image` may be repeated to pass multiple reference images (e.g. the floor plan plus
   a prior room render, for continuity). Omit `--image` for a text-only generation.

## Step 1 — Ingest the floor plan

Read the uploaded image/PDF directly. Extract into a simple internal schema:

- List of rooms with name/type (bedroom, kitchen, bath, living, etc.)
- Approximate shape and relative size of each room
- Door and window openings per room, and which rooms are adjacent
- Any printed scale, dimensions, or compass orientation
- Overall square footage if computable from marked dimensions

If the plan is low-res or ambiguous about a room's use, ask rather than guess.

## Step 2 — Confirm scope and style

Don't ask about anything the user already told you. Use `AskUserQuestion` for what's
still open, typically:

- **Output mode**: 3D floor plan only / per-room photoreal renders only / both
- **Design style**: e.g. modern minimalist, transitional, coastal, mid-century, luxury contemporary
- **Materials**: flooring, wall finish/color, countertops, cabinetry — can be one global
  palette or per-room overrides
- **Furniture**: style/era, and whether specific pieces should appear in specific rooms
- **Lighting / mood**: time of day, warm vs. cool, natural window light vs. staged/evening

If the user gave a partial spec (e.g. "walnut floors, everything else your call"), fill the
rest with a consistent, tasteful default and state what you chose.

## Step 3 — Generate the 3D dollhouse floor plan

Call `gemini-render.mjs` with the source floor plan passed via `--image` as a reference,
and a prompt that specifies:
   - "isometric / axonometric dollhouse-style 3D floor plan, roof removed, camera looking
     down at ~45°"
   - the exact room layout, wall positions, and door/window openings from Step 1 — do not
     let the model invent a different layout
   - the confirmed material palette applied per room
   - clean architectural-visualization lighting (not moody — this is a layout reference)
   - request the largest resolution/aspect ratio suited to the plan's proportions via
     `--aspect-ratio`

If the result doesn't match the source layout closely enough, retry with a more explicit
prompt (call out the specific mismatch) rather than accepting a wrong layout.

## Step 4 — Generate ultra-realistic per-room renders

For each room in scope, build one detailed prompt covering:

- Room type, approximate shape/dimensions and window/door placement from Step 1
- Eye-level interior camera angle, wide-angle lens — match real-estate/architectural
  photography framing, not a rendered-CG look
- The confirmed materials for that room (flooring, walls, counters, cabinetry, fixtures)
- The confirmed furniture — specific pieces and style, placed sensibly for the room's shape
- Lighting/mood from Step 2 (natural window light for day scenes, warm practicals for evening)
- Photographic quality tags: ultra-realistic, natural light, shallow depth of field where
  appropriate, interior-design-magazine quality, 4K

Pass the floor plan (and, when available, the Step 3 dollhouse render) via `--image` so room
proportions and opening placement stay consistent with the plan and with each other. Run the
script once per room; run it multiple times with the same prompt if the user wants variations
to choose from — there's no batch/count flag, each call produces one image.

## Step 5 — Consistency across rooms

Keep the same design language across the whole set unless the user asks for a room-specific
departure: same material palette logic, same lighting time-of-day, and pass the neighboring
room's already-generated image as an extra `--image` reference when generating an adjoining
space (e.g. an open kitchen/living area) so they read as one continuous space rather than
mismatched generations.

## Step 6 — Iteration

When the user wants to swap materials or furniture in one room, regenerate only that room's
prompt with the updated spec, keeping the same reference chain — don't regenerate the full
set. Offer this explicitly after delivering the first pass.

## Step 7 — Delivery

Package and send via `SendUserFile`:

- The 3D dollhouse floor plan image
- One final image per room, clearly labeled by room name

State plainly which choices were defaults vs. user-specified, and remind the user this is a
visualization tool, not a construction document.

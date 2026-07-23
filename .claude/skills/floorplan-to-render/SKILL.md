---
name: floorplan-to-render
description: Turn an uploaded 2D floor plan into a 3D "dollhouse" floor plan visualization and/or ultra-realistic photoreal renders of each room, using client-specified materials, furniture, and style. Use whenever a floor plan, blueprint, or building layout is uploaded and the user wants a 3D floor plan, room renderings, interior visualization, staging preview, or architectural rendering from it.
---

# Floor Plan → 3D Render Workflow

Converts a 2D floor plan (photo, scan, or PDF export) into:
1. A 3D isometric "dollhouse" floor plan (optionally an interactive 3D model), and/or
2. Ultra-realistic, photograph-quality renders of each individual room, styled with the
   client's chosen materials and furniture.

This is a marketing / pre-visualization / client-presentation tool — a natural add-on for
real-estate and architectural photography clients who want to show a space before it's
staged, renovated, or built. **It is not CAD-accurate.** Room proportions and openings are
preserved from the source plan, but dimensions are not construction-grade. Say so if asked.

## Tools used

- `media_upload_widget` / `media_import_url` — get the floor plan image into the system
- `mcp__Higgsfield__models_explore` — pick the right model per step (`action: recommend`)
- `mcp__Higgsfield__generate_image` — the 3D dollhouse render and each room render
- `mcp__Higgsfield__generate_3d` (`image_to_3d`) — optional rotatable GLB of the dollhouse render
- `mcp__Higgsfield__upscale_image` — final 2K/4K delivery pass
- `AskUserQuestion` — collect style/material/furniture/output-mode choices up front
- `SendUserFile` — deliver the final set

Always call `get_cost: true` before running a full multi-room batch and report the estimated
credits before generating more than ~4 images — floor plans with many rooms add up fast.

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

1. `models_explore(action: 'recommend', type: 'image', input: 'image', query: 'isometric dollhouse 3D floor plan render from 2D blueprint, all rooms visible, no roof')`
2. Upload the source floor plan as a reference image.
3. `generate_image` with the floor plan as a reference media and a prompt that specifies:
   - "isometric / axonometric dollhouse-style 3D floor plan, roof removed, camera looking
     down at ~45°"
   - the exact room layout, wall positions, and door/window openings from Step 1 — do not
     let the model invent a different layout
   - the confirmed material palette applied per room
   - clean architectural-visualization lighting (not moody — this is a layout reference)
4. Optional: feed the resulting image into `generate_3d` (`image_to_3d`) to produce a
   rotatable GLB model for interactive presentation.
5. `upscale_image` the chosen result to 4K.

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

Pass the floor plan (and, when available, the Step 3 dollhouse render) as reference media
so room proportions and opening placement stay consistent with the plan and with each other.
Generate up to 4 variations per room if the user wants options; otherwise 1 is fine.
`upscale_image` the selected result per room to 4K.

## Step 5 — Consistency across rooms

Keep the same design language across the whole set unless the user asks for a room-specific
departure: same material palette logic, same lighting time-of-day, and chain reference
images/job_ids room-to-room so adjoining spaces (e.g. an open kitchen/living area) read as
one continuous space rather than mismatched generations.

## Step 6 — Iteration

When the user wants to swap materials or furniture in one room, regenerate only that room's
prompt with the updated spec, keeping the same reference chain — don't regenerate the full
set. Offer this explicitly after delivering the first pass.

## Step 7 — Delivery

Package and send via `SendUserFile`:

- The 3D dollhouse floor plan (image, plus GLB if generated)
- One final image per room, clearly labeled by room name

State plainly which choices were defaults vs. user-specified, and remind the user this is a
visualization tool, not a construction document.

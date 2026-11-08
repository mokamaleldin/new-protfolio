# Mohamed's illustrated workspace

A complete 28-second SVG character scene, integrated into the existing profile card. Everything runs locally in React and the browser. It needs no paid service, video file, account, credits, premium asset, plugin, or additional runtime dependency.

## Editable source

- `src/components/profile-scene/WorkspaceArtwork.tsx` — canonical vector artwork: independently grouped facial features, curl clusters, head, tailored blazer, sleeves, hands, thighs, calves, shoes, desk, computer, chair and planning board. Named SVG IDs and `data-part` attributes identify the rig parts.
- `src/components/profile-scene/timeline.ts` — complete animation: chapter times, body and hand poses, camera, footstep clips, two-bone inverse kinematics, card contact, drawing, notes, screen construction/refinement and loop closure.
- `src/components/layout/ProfilePortrait.tsx` — browser clock, DOM updates, visibility handling, reduced motion and localized pause/resume control.
- `src/data/profile-scene.ts` — English and Arabic accessible descriptions and control labels. There is no visible language-specific copy in the artwork.
- `public/images/profile/mohamed-workspace.svg` — standalone, editable SVG of the welcoming still. Open in a vector editor or browser. It contains real paths and groups, with no embedded raster portrait.
- `assets/profile-scene/preview.webp` — optional full-loop review export; the website uses the live SVG, not this file.

The three clearest supplied photographs and the earlier character study informed the oval face, tapered chin, prominent ears, short curly black hair, tapered sides, almond brown eyes, eyebrows, nose, natural olive skin and sparse moustache/chin beard. The fourth supplied photograph was also inspected in the earlier reference pass. The outfit has been redesigned as an oversized orange tailored blazer, off-white inner layer, relaxed charcoal trousers, understated dark shoes and a silver watch on the left wrist.

Primary brand colors are the project's `#151312`, `#F46C38`, `#CA592E` and a restrained `#C5FF41` completion accent. Additional gradient stops describe natural skin, cloth shading and off-white materials.

## Timeline

| Seconds | Action |
| --- | --- |
| 0–3 | Close view establishes Mohamed's face, eye contact, a restrained smile and a small right-hand wave. Camera gently reveals the room. |
| 3–7 | Reviews the client brief, listens with a small head movement and writes three notes. The client representation remains visible on the monitor. |
| 7–11.4 | Takes grounded steps to the board, examines the disconnected workflow and points out its bottleneck. |
| 11.4–15.8 | Physically moves three cards into a clear sequence, then connects the route. Cards follow the hand throughout each drag. |
| 15.8–22 | Moves to the chair, lowers onto its seat with knees bending and feet planted, types to build interface panels, then uses the mouse to align/refine a panel. |
| 22–24.5 | Reviews the finished interface, gives a small acknowledging nod and rises. |
| 24.5–28 | Walks back, turns to the visitor and waves. Camera returns to the opening framing. The board resets only after its cards are outside the crop; the monitor gently returns to the next brief. |

The first browser frame uses the welcoming pose at 0.8 seconds; the repeating timeline lasts 28 seconds. Reduced motion holds that same polished pose. No audio or lip-sync is present.

## Rig and performance

The animation uses native `requestAnimationFrame` and SVG attributes. One clock coordinates all 56 animated parts. It paints at up to 30 fps without re-rendering React on every frame, querying the DOM repeatedly, or loading a video. Unchanged attributes are skipped.

Arms and legs retain their bone lengths. Feet are planted in world coordinates during the stance portion of a step; only the swing foot advances. Elbow-pole changes use joint rotations during reaches, avoiding an instantaneous mirrored IK solution. The seated pose keeps the feet on the floor while hips settle onto the existing chair. Head, gaze, blinks, mouth, hands, writing, card movements and screen responses share the same timeline.

The original rounded frame stays **224 × 264 px** below 430 px and **238 × 280 px** above it. The SVG uses a 360 × 424 coordinate system. Name, biography, monogram and social links remain separate website elements.

The clock stops outside the viewport, when the tab is hidden, or after a manual pause. Visibility changes preserve a manual pause. Reduced-motion visitors get the welcoming still and no animation control or active frame loop. Preference changes are handled live. Without JavaScript, the server-rendered SVG remains a useful still.

## Export and verification

Export the current welcoming SVG, using the project's existing free development dependencies:

```sh
node scripts/export-profile-scene.mjs
```

Export another exact point on the editable timeline:

```sh
node scripts/export-profile-scene.mjs 19 /tmp/mohamed-working.svg
```

For a complete sequence of review PNGs at 12 fps:

```sh
node scripts/export-profile-scene.mjs --frames /tmp/mohamed-review-frames
```

Tests cover fixed limb lengths, stance-foot locking and arrival, hand contact throughout all card drags, continuous motion at every pose boundary, and loop/camera continuity. English desktop and Arabic mobile rendering, pause/resume and offscreen behavior were checked in the browser. Initial/live reduced-motion and hidden-tab events were additionally exercised in a temporary browser harness outside the delivery checkout; that test page is not part of the website.

```sh
npm test
npm run typecheck
npm run build
```

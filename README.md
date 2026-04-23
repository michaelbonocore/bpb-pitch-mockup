# Boise Premier Blinds Pitch Mockup

This repository hosts the pitch-artifact website for Boise Premier Blinds, produced by Sawtooth Creative Studio. It is a single-page static mockup served via GitHub Pages. It is NOT the production website for Boise Premier Blinds.

## Status

- Design System: v4 (locked 2026-04-23)
- Homepage: v2 (locked 2026-04-23)
- Photography: AI-generated placeholders in progress. Real Phase 1 install shoot replaces AI imagery post-engagement.

## Photo swap workflow

1. Generate the AI photo for a slot via Nano Banana Pro or Seedream 4.5.
2. Save the photo to `photos/{slot}.webp`.
3. Update `photos.js` so the slot's `src` points to `photos/{slot}.webp`.
4. Commit, push. GitHub Pages redeploys in seconds.

Slot names: `hero`, `product-blinds`, `product-shades`, `product-shutters`, `product-drapery`, `feature-powerview`, `feature-portfolio`.

## Live URL

https://michaelbonocore.github.io/bpb-pitch-mockup/

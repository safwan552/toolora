# Toolora Progress

## Implemented
- [x] Next.js foundation, tool directory, responsive header/footer and informational pages
- [x] Searchable tool directory with accessible search feedback
- [x] Text utilities: word counter, case converter, whitespace cleaner, repeater
- [x] Password generator, QR generator, age calculator, percentage calculator and basic calculator with validation
- [x] Image compressor, resizer and JPG/PNG conversion (browser canvas), with validation and responsive controls
- [x] PDF merge, page extraction and image-to-PDF (pdf-lib), with input checks
- [x] GitHub Actions build workflow
- [x] SEO routes: robots.txt and sitemap
- [x] Unique per-tool metadata and WebApplication structured data
- [x] Privacy disclosures, contact via GitHub Issues, and deployment instructions

## Verified build checks
- [x] Recent GitHub Actions build checks passed for image syntax repair, mobile UI/accessibility, calculator validation, privacy policy, contact page and README updates.
- [x] Cloudflare compatibility adjustment (removing standalone output) passed CI.
- [x] GitHub Actions now runs ESLint before the production build.
- [x] Latest verified CI run (Nov 20, 2026): dependency audit, ESLint and production build all passed.

## Remaining before launch
- [ ] Cloudflare Workers account/repository connection and first deployment (requires owner dashboard authorization)
- [ ] Manual browser testing of all tools on mobile and desktop
- [ ] Confirm live URL, sitemap and robots.txt after deployment
- [ ] Consider custom domain and analytics/ad configuration only when desired

## Notes
- QR code content is sent to an external QR service, disclosed in the tool UI and privacy policy.
- Image/PDF tools are designed to process files locally in the browser.
- Build checks are not a substitute for manual browser testing.
- Deployment instructions: [DEPLOYMENT.md](DEPLOYMENT.md)

## Latest robustness improvements (Nov 20, 2026)
- [x] Text repeater output capped at 1 million characters.
- [x] Image-processing tools reject images exceeding 8000 pixels in either dimension.
- [x] Password generator validates integer length (4–128) and uses rejection sampling to avoid modulo bias.
- [x] PDF merge and image-to-PDF enforce aggregate input limits (100 MB) and image dimension limits (8000 pixels).
- [x] Added copy feedback for text-tool results and aggregate resource limits for PDF/image-to-PDF inputs.\n- [x] Fixed age-calculator date handling to use local calendar dates and validate parsed dates.\n- [x] Added reduced-motion support for visitors who request less animation.
- [x] Corrected age calculation to compare local calendar dates and reject invalid dates.
- [x] Added PDF page-count safeguards (500 pages merged; 1,000 pages maximum for extraction).
- [x] Validate image MIME types and 40 MB file size before creating previews.
- [x] Added ESLint 9 legacy-config compatibility so the CI lint step can locate the Next.js rules.
- [x] Added `package-lock.json`; CI now uses `npm ci` with npm caching and read-only repository permissions.
- [x] Latest CI run using the committed lockfile passed dependency audit, ESLint and production build.

- [x] Added strict dependency audit gate; PostCSS override addresses the reported vulnerable transitive dependency.
- [x] Committed `package-lock.json` and switched CI to `npm ci` for reproducible installs.

## Additional hardening (Nov 20, 2026)
- [x] JPEG exports now paint a white background before drawing, preserving readable output when source PNGs contain transparency.
- [x] JPG-to-PDF now limits batches to 50 images and caps generated documents at 500 pages.
- [x] Removed the stale `toolora.pages.dev` hostname from metadata, sitemap and robots configuration; set `NEXT_PUBLIC_SITE_URL` to the actual Cloudflare Worker hostname or custom domain during deployment.
- [x] Moved GitHub Actions to Node.js 22.
- [x] Confirmed the combined image/PDF and SEO changes pass dependency audit, ESLint and production build on the Node.js 20 workflow; Node.js 22 verification is running.
- [ ] Complete live browser/device smoke tests after Cloudflare preview deployment.

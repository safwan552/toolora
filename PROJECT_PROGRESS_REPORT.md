# Toolora Progress

## Implemented
- [x] Next.js foundation, tool directory, header/footer and informational pages
- [x] Searchable tool directory
- [x] Text utilities: word counter, case converter, whitespace cleaner, repeater
- [x] Password generator, QR generator, age calculator, percentage calculator and basic calculator
- [x] Image compressor, resizer and JPG/PNG conversion (browser canvas)
- [x] PDF merge, page extraction and image-to-PDF (pdf-lib)
- [x] GitHub Actions build workflow
- [x] Build check passed on commit `dea9f416` and PDF route commit `d99c70a`

## Latest changes
- [x] Case conversion modes: uppercase, lowercase, title case and sentence case
- [x] Corrected title-case word-boundary handling and sentence-case sentence starts (commit `451eb4b`)
- [x] Fixed image-resizer JSX syntax error discovered by CI (commit `822ad9c`)
- [x] Added `robots.txt` and sitemap routes (commits `86ac67c`, `a5625a0`)
- [ ] Verify build after these fixes
- [ ] Mobile/accessibility polish and manual browser testing
- [ ] Cloudflare deployment

## Notes
- QR code content is sent to the external QR service, disclosed in the tool UI.
- Image/PDF tools process files locally in the browser.
- Build checks are not a substitute for manual browser testing.

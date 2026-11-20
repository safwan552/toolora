# Toolsyra Cloudflare Workers deployment

Toolsyra uses Next.js with the OpenNext Cloudflare adapter.

## Build and deploy

- Install: `npm install`
- Build: `npm run cf-build`
- Preview: `npm run cf-preview`
- Deploy: `npm run cf-deploy`

Cloudflare Workers Builds should use the repository `main` branch, build command `npm install && npm run cf-build`, and deploy command `npm run cf-deploy`. The Worker config is in `wrangler.jsonc`.

## Launch checks

- Home page, tool search, navigation and mobile layout
- Image compressor/resizer and format conversion
- PDF merge, split/extract and JPG-to-PDF
- Text tools, QR generation, password generator and calculators
- `/robots.txt` and `/sitemap.xml`
- Malformed input and error handling

Do not use static export or the legacy Pages flow.

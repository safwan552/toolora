# Deploy Toolora to Cloudflare Workers

Cloudflare Workers can automatically configure and deploy existing Next.js projects through Git integration. It uses **Workers**, not the legacy Pages product.

## One-time setup
1. Sign in to Cloudflare.
2. Open **Workers & Pages** and create a Worker.
3. Choose **Connect to Git** and authorize/connect GitHub.
4. Select `safwan552/toolora` and branch `main`.
5. Allow Cloudflare's framework auto-configuration to detect Next.js and generate the deployment setup. Review its generated pull request/configuration.
6. Cloudflare can generate a preview deployment for testing; merge the generated configuration PR when ready, then deploy.

## Manual OpenNext setup (if auto-configuration doesn't work)
For Next.js 15, OpenNext commands:
- Build: `npx @opennextjs/cloudflare build`
- Deploy: `npx @opennextjs/cloudflare deploy`

The manual OpenNext configuration requires its adapter, Wrangler config, and OpenNext config. Prefer Cloudflare's auto-configuration unless the dashboard asks for manual settings.

Do not use `next export` or the legacy Pages static-export flow for this app unless intentionally converting it to static output.

## Launch smoke-test checklist
After a preview or production deployment, test on mobile and desktop:
- [ ] Home page loads and tool search filters results correctly.
- [ ] Image compressor and resizer accept a valid image and download output; reject invalid files gracefully.
- [ ] JPG/PNG conversions produce downloadable files.
- [ ] PDF merge, split/extract and JPG-to-PDF work with sample files; malformed files show helpful errors.
- [ ] Text tools, QR generation, password generator and calculators produce expected output.
- [ ] Header, footer, mobile navigation and informational pages work; no broken links.
- [ ] `/robots.txt` and `/sitemap.xml` load and contain the expected site routes.
- [ ] Check console for errors and verify layout at narrow mobile width.

## After deployment
- Open the generated `workers.dev` URL and complete the smoke tests above.
- Configure a custom domain later from Worker settings if desired.
- Keep GitHub build checks passing.

Official docs:
- https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/

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

## After deployment
- Open the generated `workers.dev` URL and test every tool, navigation and informational page.
- Check `/robots.txt` and `/sitemap.xml`.
- Configure a custom domain later from Worker settings if desired.
- Keep GitHub build checks passing.

Official docs:
- https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/

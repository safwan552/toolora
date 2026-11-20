# Deploy Toolora to Cloudflare Workers

Cloudflare's current Next.js deployment flow supports automatic configuration through Wrangler. It deploys to **Workers**, not the legacy Pages product.

## One-time setup (in Cloudflare dashboard)
1. Sign in to Cloudflare.
2. Open **Workers & Pages** and choose **Create application** / **Create Worker**.
3. Choose **Connect to Git** and connect your GitHub account.
4. Select `safwan552/toolora` and branch `main`.
5. If Cloudflare offers automatic Next.js configuration, review and accept its generated configuration (the current framework flow uses the OpenNext adapter for Next.js 15).
6. Confirm build/deploy settings and deploy. Follow any prompts from Cloudflare's setup wizard.

## If you need manual settings
For a Next.js 15 project, Cloudflare's OpenNext adapter build/deploy commands are:
- Build: `npx @opennextjs/cloudflare build`
- Deploy: `npx @opennextjs/cloudflare deploy`

Do not use `next export` or configure the legacy Pages static-export flow for this application unless the project is intentionally converted to static output.

## After deployment
- Open the generated `workers.dev` URL and test every tool, navigation and informational page.
- Check `/robots.txt` and `/sitemap.xml`.
- Configure a custom domain later from the Worker settings if desired.
- Keep the GitHub build workflow passing.

Official docs: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/ and https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/

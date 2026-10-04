This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Page view counter (Vercel Web Analytics)

The homepage displays the project's recorded page view total below the hero's
`text-4xl font-sans tracking-tight text-white` text. The root layout includes
`@vercel/analytics/next` to collect page views and client-side navigation events.

To connect the counter:

1. Enable Web Analytics in the project's Vercel dashboard.
2. Create a [Vercel access token](https://vercel.com/account/tokens) with access
   to the account/team that owns this project.
3. Add the following **server-only** environment variables in Vercel project
   Settings > Environment Variables for the environments where you want the
   counter to work:
   - `VERCEL_ANALYTICS_TOKEN`: the access token.
   - `VERCEL_ANALYTICS_PROJECT_ID`: Project ID from project Settings > General.
   - `VERCEL_ANALYTICS_TEAM_ID`: Team ID from team Settings > General, required
     for team-owned projects. Omit for personal-account projects.
4. Deploy the updated project once. For local development, copy `.env.example`
   to `.env.local`, fill in the values privately, and restart `npm run dev`.

Never prefix these credentials with `NEXT_PUBLIC_` or commit `.env.local`.
The browser reads only `{ pageviews }` from `/api/page-views`; credentials and
Vercel's detailed response stay on the server.

The server queries the `data.pageviews` field of Vercel's production count
endpoint across **all pages**, without a date filter. This is the total since
Analytics was enabled, not the dashboard's default reporting window. Tracking
only begins once the Analytics component is deployed; earlier visits cannot be
recovered. Page views include repeat views and client-side page navigation;
they do not measure unique visitors or people currently online.

Successful upstream reads and public responses are cached for five minutes;
an open, visible page also checks every five minutes. Analytics processing and
caching mean a new visit may not appear immediately. No database, GitHub Action,
or deployment per visit is needed.

Loading shows `Loading page views…`. Missing configuration, denied API access,
network failures, or malformed responses show `Page views unavailable`, never a
fabricated zero. Later refresh failures preserve the last successful count.
Check Vercel Function logs for API status codes, token access, and project/team
IDs if the counter stays unavailable. Local development does not send real
analytics events, but can read production totals when configured.

References: [Analytics API guide](https://vercel.com/docs/analytics/web-analytics-api),
[count endpoint](https://vercel.com/docs/rest-api/web-analytics/counts-page-views).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

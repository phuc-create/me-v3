// Keep credentials here on the server. The browser only receives the total.
export async function GET() {
  const token = process.env.VERCEL_ANALYTICS_TOKEN?.trim()
  const projectId = process.env.VERCEL_ANALYTICS_PROJECT_ID?.trim()
  const teamId = process.env.VERCEL_ANALYTICS_TEAM_ID?.trim()

  const unavailable = () =>
    Response.json(
      { visitors: null },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )

  if (!token || !projectId) {
    return unavailable()
  }

  const url = new URL(
    'https://api.vercel.com/v1/query/web-analytics/visits/count'
  )
  url.searchParams.set('projectId', projectId)
  if (teamId) url.searchParams.set('teamId', teamId)

  try {
    // No date/path filter: production visitors across the whole project,
    // since Analytics was enabled. Cache reads, never maintain our own total.
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000)
    })

    if (!response.ok) {
      console.warn('Visitor count: Vercel API returned', response.status)
      return unavailable()
    }

    const payload = await response.json()
    const visitors: unknown = payload?.data?.visitors

    if (
      typeof visitors !== 'number' ||
      !Number.isSafeInteger(visitors) ||
      visitors < 0
    ) {
      console.warn('Visitor count: invalid Vercel API response')
      return unavailable()
    }

    return Response.json(
      { visitors },
      {
        headers: {
          'Cache-Control': 'public, max-age=0, s-maxage=300'
        }
      }
    )
  } catch {
    console.warn('Visitor count: unable to read Vercel Analytics')
    return unavailable()
  }
}

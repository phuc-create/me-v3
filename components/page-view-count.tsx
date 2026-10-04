'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export default function PageViewCount() {
  const [pageviews, setPageViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const refresh = async () => {
      try {
        const response = await fetch('/api/page-views', {
          cache: 'no-store',
          signal: AbortSignal.any([
            controller.signal,
            AbortSignal.timeout(10000)
          ])
        })
        if (!response.ok) throw new Error('Page view count unavailable')

        const data = await response.json()
        if (
          typeof data.pageviews !== 'number' ||
          !Number.isSafeInteger(data.pageviews) ||
          data.pageviews < 0
        ) {
          throw new Error('Invalid page view count')
        }

        if (!controller.signal.aborted) setPageViews(data.pageviews)
      } catch {
        // Preserve the last successful count if a later refresh fails.
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void refresh()
    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') void refresh()
    }, 300000)

    return () => {
      controller.abort()
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div
      className="text-muted-foreground inline-flex min-h-8 items-center gap-2 rounded-full border border-current/15 px-3 py-1 font-mono text-xs"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      title="Page views recorded across this site since Analytics tracking began. Includes repeat views and updates periodically."
    >
      <Eye className="size-3.5 shrink-0" aria-hidden="true" />
      {pageviews !== null ? (
        <span>
          <span className="text-foreground font-medium tabular-nums">
            {new Intl.NumberFormat('en-US').format(pageviews)}
          </span>{' '}
          {pageviews === 1 ? 'page view' : 'page views'}
        </span>
      ) : (
        <span>
          {loading ? 'Loading page views…' : 'Page views unavailable'}
        </span>
      )}
    </div>
  )
}

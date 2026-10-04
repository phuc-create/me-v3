'use client'

import { useEffect, useState } from 'react'
import { Users } from 'lucide-react'

export default function VisitorCount() {
  const [visitors, setVisitors] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const refresh = async () => {
      try {
        const response = await fetch('/api/visitors', {
          cache: 'no-store',
          signal: AbortSignal.any([
            controller.signal,
            AbortSignal.timeout(10000)
          ])
        })
        if (!response.ok) throw new Error('Visitor count unavailable')

        const data = await response.json()
        if (
          typeof data.visitors !== 'number' ||
          !Number.isSafeInteger(data.visitors) ||
          data.visitors < 0
        ) {
          throw new Error('Invalid visitor count')
        }

        if (!controller.signal.aborted) setVisitors(data.visitors)
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
      title="Visitors recorded by Vercel Analytics since tracking began. Updates periodically; repeat visits on different days can count again."
    >
      <Users className="size-3.5 shrink-0" aria-hidden="true" />
      {visitors !== null ? (
        <span>
          <span className="text-foreground font-medium tabular-nums">
            {new Intl.NumberFormat('en-US').format(visitors)}
          </span>{' '}
          {visitors === 1 ? 'visitor' : 'visitors'}
        </span>
      ) : (
        <span>{loading ? 'Loading visitors…' : 'Visitors unavailable'}</span>
      )}
    </div>
  )
}

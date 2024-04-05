import React, { Suspense } from 'react'

export const Loader =
  <P extends object>(Component: React.FunctionComponent<P>): React.FC<P> =>
  // eslint-disable-next-line react/display-name
  (props: P) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  )

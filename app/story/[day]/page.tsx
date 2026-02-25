import React from 'react'

const SotoryCollectionPage = async ({
  params
}: {
  params: { day: string }
}) => {
  const { day } = await params
  return <div>SotoryCollectionPage :{day}</div>
}

export default SotoryCollectionPage

'use client'
import React, { use } from 'react'
type Params = Promise<{ day: string }>

const SotoryCollectionPage = (props: { params: Params }) => {
  const { day } = use(props.params)
  return <div>SotoryCollectionPage :{day}</div>
}

export default SotoryCollectionPage

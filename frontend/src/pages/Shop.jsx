import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import {Popular} from '../Components/Populars/Popular'
import { NewOffers } from '../Components/NewOffers/NewOffers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewOffers/>
        <NewCollections/>
    </div>
  )
}

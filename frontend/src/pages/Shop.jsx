import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import {Popular} from '../Components/Populars/Popular'
import { NewOffers } from '../Components/NewOffers/NewOffers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewOffers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

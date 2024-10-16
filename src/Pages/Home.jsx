import React from 'react'
import Hero from '../Components/Hero'
import LatestContex from '../Components/LatestContex'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'


const Home = () => {
  return (
    <>
      <div>
     <Hero/>
     <LatestContex/>
    <BestSeller/>
    <OurPolicy/>
    <NewsletterBox/>
    </div>
    </>
  )
}

export default Home

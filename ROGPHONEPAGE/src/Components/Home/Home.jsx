import React from 'react'
import Hero from './Hero/Hero'
import Explore from './Explore/Explore'
import Carousel from './Carousel/Carousel'
import AboutRog from './AboutRog/AboutRog'
import InAction from './InAction/InAction'

const Home = () => {
  return (
    <div className='box-border'>
     <Hero/>
     <Explore/>
     <Carousel/>
     <AboutRog/>
     <InAction/>
    </div>
  )
}

export default Home

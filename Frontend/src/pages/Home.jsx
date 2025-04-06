import React from 'react'
import MainBanner from '../components/MainBanner'
import  Categories  from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottomBaner from '../components/BottomBaner'
import Newslatter from '../components/Newslatter'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottomBaner />
      <Newslatter />
    </div>
  )
}

export default Home
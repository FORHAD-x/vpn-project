import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ResponsiveMenu from '../components/responsive/ResponsiveMenu'
import Banner from '../components/banner/Banner'
import BannerBottom from '../components/banner/BannerBottom'
import Features from '../components/features/Features'
import Plan from '../components/plan/Plan'
import Global from '../components/global/Global'
import SliderResponsive from '../components/slider/SliderResponsive'
import Footer from '../components/footer/Footer'
import Mainfooter from '../components/mainfooter/Mainfooter'

const Home = () => {
  return (
    <>
      <Navbar/>
      <ResponsiveMenu/>
      <Banner/>
      <BannerBottom/>
      <Features/>
      <Plan/>
      <Global/>
      <SliderResponsive/>
      <Footer/>
      <Mainfooter/>
    </>
  )
}

export default Home
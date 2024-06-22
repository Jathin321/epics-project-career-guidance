import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Blogs from '../components/LandingPage/Blogs'
import Pricing from '../components/LandingPage/Pricing'
import Footer from '../components/LandingPage/Footer';
import Banner from '../components/LandingPage/Banner';
// import Workflow from '../components/LandingPage/Workflow';

export default function Home() {
  return (
      <div className=''>
          <Navbar />
          <Banner />
          <Blogs />
         

          <Pricing />
          <Footer/>
          </div>
  )
}

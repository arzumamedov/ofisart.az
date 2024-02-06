import React from 'react'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import ProductSection from '../../components/ProductSection/ProductSection'
import Gallery from '../../components/Gallery/Gallery'

function Homepage() {
  return (
    <>
        <HeaderSection/>
        <ProductSection/>
        <Gallery/>
        {/* <VideoPlayer/> */}
    </>
  )
}

export default Homepage
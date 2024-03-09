import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import Video from '../../components/Video/Video';
import { Helmet } from "react-helmet";


function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderSection />/
      <ProductSection />
      <Gallery />
      <Video />
    </>
  )
}

export default Homepage
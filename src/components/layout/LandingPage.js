import React from 'react'
import ImageSlider from './ImageSlider';
import HomePageProduct from './../HomePageProduct/HomePageProduct';

function LandingPage(props) {
  document.title = "Online site for shopping."
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProduct />
      </div>
    </React.Fragment>
  )
}

export default LandingPage;

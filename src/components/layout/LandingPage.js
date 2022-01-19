import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider';
import HomePageProduct from './../HomePageProduct/HomePageProduct';

function LandingPage(props) {


  useEffect(() => {

    document.title = "Online site for shopping."

    // cleanup
    return () => {

    }
  }, []);

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

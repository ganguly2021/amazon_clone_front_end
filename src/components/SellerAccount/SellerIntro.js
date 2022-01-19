import React, { useEffect, useState } from 'react'
import SellerIntroView from './SellerIntroView'

const SellerIntro = (props) => {

  useEffect(() => {
    document.title = "Amazon Clone - Seller Intro"

    // cleanup
    return () => {

    }
  }, [])
  return (
    <SellerIntroView
      {...props}
    />
  )
}


export default SellerIntro

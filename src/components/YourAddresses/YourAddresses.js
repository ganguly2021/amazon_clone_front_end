import React, { useEffect, useState } from 'react'
import YourAddressesView from './YourAddressesView'

const YourAddresses = (props) => {

  useEffect(() => {

    // cleanup
    return () => {

    }
  }, [])

  return (
    <YourAddressesView
      {...props}
    />
  )
}

export default YourAddresses

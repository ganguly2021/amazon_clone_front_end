import React, { useState, useEffect } from 'react'
import YourAccountView from './YourAccountView'
import { connect } from 'react-redux'

const YourAccount = (props) => {

  useEffect(() => {

    document.title = "Amazon Clone - Your Account"

    // cleanup
    return () => {

    }
  })

  return (
    <YourAccountView
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(YourAccount)
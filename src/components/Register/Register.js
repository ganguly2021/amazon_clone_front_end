import React, { useState, useEffect } from 'react'
import RegisterView from './RegisterView'
import { registerRequest } from './../../redux/actions/registerActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // change page title
    document.title = "Amazon Clone - Register"

    // if user already loggedin
    if (props.login.isAuthenticated) {
      navigate("/your_account")
    }

    // cleanup
    return () => {

    }
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'password2') {
      setPassword2(value)
    } else if (name === 'email') {
      setEmail(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: username,
      password: password,
      password2: password2,
      email: email
    }

    props.registerRequest(user, navigate)
  }

  return (
    <RegisterView
      username={username}
      email={email}
      password={password}
      password2={password2}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  register: state.register,
  login: state.login
})

const mapDispatchToProps = {
  registerRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

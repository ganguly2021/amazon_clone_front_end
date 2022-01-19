import React, { useState, useEffect } from 'react'
import LoginView from './LoginView';
import { loginRequest } from './../../redux/actions/loginActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // Change page title
    document.title = "Amazon Clone - Login"

    if (this.props.login.isAuthenticated) {
      navigate("/your_account")
    }

    // cleanup
    return () => {

    };
  }, []);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }

    props.loginRequest(user, navigate)
  }

  return (
    <LoginView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...props}

      email={email}
      password={password}
    />
  )

}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = {
  loginRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

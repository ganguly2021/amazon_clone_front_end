import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoginView from "./LoginView";
import { loginSchema } from "./../../validations/userSchema";
import { getFormattedError } from "./../../helpers/validation";
import { loginRequest, loginError } from "./../../redux/actions/loginActions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Change page title
    document.title = "Amazon Clone - Login";

    if (props.login.isAuthenticated) {
      navigate("/your_account");
    }

    // cleanup
    return () => {};
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    // validate form data
    const { error, values } = loginSchema.validate(user);

    if (error) {
      // set login error in redux store
      props.loginError(getFormattedError(error));
    } else {
      // send login api request
      props.loginRequest(user, navigate);
    }
  };

  return (
    <LoginView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...props}
      email={email}
      password={password}
    />
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
  loginError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

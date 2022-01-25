import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import PasswordChangeView from "./PasswordChangeView";
import { connect } from "react-redux";
import {
  changePassword,
  updateUserProfilePic,
  loginError
} from "./../../redux/actions/loginActions";
import { changePasswordSchema } from "./../../validations/userSchema";
import { getFormattedError } from './../../helpers/validation'

const PasswordChange = (props) => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [profile_pic, setProfilePic] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    // set username from redux
    setUsername(props.login.user.username);

    // update page title
    document.title = "Amazon Clone - Password Change";

    // cleanup
    return () => {};
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      setUsername(value);
    } else if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "newPassword2") {
      setNewPassword2(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      newPassword: newPassword,
      newPassword2: newPassword2,
      oldPassword: oldPassword,
    };

    // check form validation erro
    const { error, value } = changePasswordSchema.validate(user);

    if (error) {
      // set form validation error in redux store
      props.loginError(getFormattedError(error))

    } else {
      // send change password request
      props.changePassword(user, navigate, props.t);

      // reset prop values to null
      setUsername(props.login.user.username);
      setNewPassword("");
      setNewPassword2("");
      setOldPassword("");
    }
  };

  // profile pic submit
  const handlePicUpload = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("profile_pic", profile_pic);

    // call to api
    props.updateUserProfilePic(formData, props.t);
  };

  // profile pic state update
  const handlePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  return (
    <PasswordChangeView
      {...props}
      username={username}
      oldPassword={oldPassword}
      newPassword={newPassword}
      newPassword2={newPassword2}
      profile_pic={profile_pic}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handlePicUpload={handlePicUpload}
      handlePicChange={handlePicChange}
    />
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  changePassword,
  updateUserProfilePic,
  loginError
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChange);

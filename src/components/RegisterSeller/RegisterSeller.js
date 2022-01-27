import React, { useState } from "react";
import { connect } from "react-redux";
import RegisterSellerView from "./RegisterSellerView";
import { registerSellerSchema } from "./../../validations/sellerSchema";
import { getFormattedError } from "./../../helpers/validation";

function RegisterSeller(props) {
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState({});
  const [companyDescription, setCompanyDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    if (name === "companyName") {
      setCompanyName(value);
    } else if (name === "companyDescription") {
      setCompanyDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const formData = {
      companyName: companyName,
      companyDescription: companyDescription,
    };

    // validate form data
    const { error } = registerSellerSchema.validate(formData, {
      abortEarly: false,
    });

    // if form errors
    if (error) {
      setError(getFormattedError(error));
    }

    // clear errors
    setError({})
    
    // API call
    console.log(formData);
  };

  return (
    <RegisterSellerView
      {...props}
      email={props.login.user.email}
      username={props.login.user.username}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      companyName={companyName}
      companyDescription={companyDescription}
      error={error}
    />
  );
}

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSeller);

import React, { useState, useEffect } from "react";
import NewAddressView from "./NewAddressView";
import { connect } from "react-redux";
import { newAddressSchema  } from './../../validations/addressSchema'
import { getFormattedError } from './../../helpers/validation'

const NewAddress = (props) => {
  const [full_name, setFullName] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [pin_code, setPincode] = useState("");
  const [house_no, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [country, setCountry] = useState("x");
  const [state, setState] = useState("x");
  const [address_type, setAddressType] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    // cleanup
    return () => {};
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "full_name") {
      setFullName(value);
    } else if (name === "pin_code") {
      setPincode(value);
    } else if (name === "mobile_number") {
      setMobileNumber(value);
    } else if (name === "house_no") {
      setHouseNo(value);
    } else if (name === "street") {
      setStreet(value);
    } else if (name === "landmark") {
      setLandmark(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "country") {
      const [selectedCountry, index] = value.split(";");
      console.log(value)
      // update selected country index
      setSelectedIndex(Number(index));
      setCountry(value);
    } else if (name === "state") {
      const [selectedState, index] = value.split(";");
      setState(value);
    } else if (name === 'addressType'){
      setAddressType(value);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = {
      full_name: full_name,
      mobile_number: mobile_number,
      pin_code: pin_code,
      house_no: house_no,
      street: street,
      landmark: landmark,
      city: city,
      country: ( country === 'x' ? '' : country.split(';')[0] ),
      state: ( state === 'x' ? '' : state.split(';')[0] ),
      address_type: address_type
    }

    const { error } = newAddressSchema.validate(address, { abortEarly: false })

    if (error){
      setError(getFormattedError(error))
    }

    console.log(address)
  };

  return (
    <NewAddressView
      {...props}
      full_name={full_name}
      mobile_number={mobile_number}
      pin_code={pin_code}
      house_no={house_no}
      street={street}
      landmark={landmark}
      city={city}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      selectedIndex={selectedIndex}
      selectedState={state}
      selectedCountry={country}
      error={error}
      address_type={address_type}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);

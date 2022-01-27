import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import TextFieldInput from "./../common/TextFieldInput";
import countries from "./../../utils/countries.json";

function NewAddressView(props) {
  const { t, i18n, selectedIndex, error } = props;
  const rtl = i18n.languages[0] == "pk" ? "text-right" : "";

  return (
    <div className="container mt-5 mb-5">
      {/* <!-- New Address Form Starts -->
    <!-- URL Breadcrumb Starts --> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent ml-n3">
          <li className="breadcrumb-item">
            <Link to="/your_account">{t("bread_crumb.your_account")}</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/your_addresses">{t("bread_crumb.your_addresses")}</Link>
          </li>
          <li
            className="breadcrumb-item active text-danger"
            aria-current="page"
          >
            {t("bread_crumb.new_address")}
          </li>
        </ol>
      </nav>
      {/* <!-- URL Breadcrumb Ends --> */}

      <h3 className="font-weight-bold">{t("add_new_address.heading")}</h3>
      <p className="font-weight-bold">{t("add_new_address.description")}</p>

      {/* <!-- New Address Form Starts --> */}
      <form
        onSubmit={props.handleSubmit}
        className="mx-auto font-weight-bold"
        autoComplete="off"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="country">{t("add_new_address.form.country")}</label>
          <select
            className={classNames("form-control", {
              "is-invalid": error.country,
            })}
            id="country"
            name="country"
            value={props.selectedCountry}
            onChange={props.handleChange}
            required
          >
            {countries.map((country, key) => {
              if (key === 0) {
                return (
                  <option value="x;0" key={key}>
                    {country.name}
                  </option>
                );
              } else {
                return (
                  <option value={`${country.name};${key}`} key={key}>
                    {country.name}
                  </option>
                );
              }
            })}
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
          </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
            {t(error.country)}
          </div>
        </div>

        <TextFieldInput
          type="text"
          name="full_name"
          className={`form-control ${rtl}`}
          placeholder="Enter full name"
          id="full_name"
          value={props.full_name}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.full_name")}
          i18n={i18n}
          t={t}
          error={error.full_name}
        />

        <TextFieldInput
          type="text"
          name="mobile_number"
          className={`form-control ${rtl}`}
          placeholder="10-digit mobile number without prefixes"
          id="mobile_number"
          value={props.mobile_number}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.mobile_number")}
          i18n={i18n}
          t={t}
          error={error.mobile_number}
          infoText={"May be used to assist delivery"}
        />

        <TextFieldInput
          type="text"
          name="pin_code"
          className={`form-control ${rtl}`}
          placeholder="6 digit [0-9] PIN Code"
          id="pin_code"
          value={props.pin_code}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.pin_code")}
          i18n={i18n}
          t={t}
          error={error.pin_code}
        />

        <TextFieldInput
          type="text"
          name="house_no"
          className={`form-control ${rtl}`}
          placeholder=""
          id="house_no"
          value={props.house_no}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.house_no")}
          i18n={i18n}
          t={t}
          error={error.house_no}
        />

        <TextFieldInput
          type="text"
          name="street"
          className={`form-control ${rtl}`}
          placeholder=""
          id="street"
          value={props.street}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.street")}
          i18n={i18n}
          t={t}
          error={error.street}
        />

        <TextFieldInput
          type="text"
          name="landmark"
          className={`form-control ${rtl}`}
          placeholder="E.g. Near AIIMS Flyover, Behind Regal Cinema, etc."
          id="landmark"
          value={props.landmark}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.landmark")}
          i18n={i18n}
          t={t}
          error={error.landmark}
        />

        <TextFieldInput
          type="text"
          name="city"
          className={`form-control ${rtl}`}
          placeholder=""
          id="city"
          value={props.city}
          onChange={props.handleChange}
          lblText={t("add_new_address.form.city")}
          i18n={i18n}
          t={t}
          error={error.city}
        />

        <div className="form-group">
          <label htmlFor="state">{t("add_new_address.form.state")}</label>
          <select
            className={classNames("form-control", {
              "is-invalid": error.state,
            })}
            id="state"
            name="state"
            value={props.selectedState}
            onChange={props.handleChange}
            required
          >
            {countries[selectedIndex].states.map((state, key) => {
              if (selectedIndex === 0) {
                return (
                  <option value="x;0" key={key}>
                    {state}
                  </option>
                );
              } else {
                if (key === 0) {
                  return (
                    <option value="x;0" key={key}>
                      {state}
                    </option>
                  );
                } else {
                  return (
                    <option value={state} key={key}>
                      {state}
                    </option>
                  );
                }
              }
            })}
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
          </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
            {t(error.state)}
          </div>
        </div>

        <h5>{t("add_new_address.bottom_heading")}</h5>
        <p>{t("add_new_address.bottom_description")}</p>

        <div className="form-group">
          <label htmlFor="addressType">
            {t("add_new_address.form.address_type")}
          </label>
          <select
            className={classNames("form-control", {
              "is-invalid": error.address_type,
            })}
            id="addressType"
            name="addressType"
            value={props.address_type}
            onChange={props.handleChange}
            required
          >
            <option value="">Select an Address Type</option>
            <option value="home">Home (7 am – 9 pm delivery)</option>
            <option value="office">
              Office/Commercial (10 AM - 6 PM delivery)
            </option>
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
          </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
            {t(error.address_type)}
          </div>
        </div>

        <button type="submit" className="btn btn-warning shadow rounded">
          {t("add_new_address.form.btn_text")}
        </button>
      </form>
      {/* <!-- New Address Form Starts --> */}
    </div>
  );
}

export default NewAddressView;

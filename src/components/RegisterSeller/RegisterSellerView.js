import React from "react";
import TextFieldInput from "../common/TextFieldInput";
import TextAreaInput from "../common/TextAreaInput";

function RegisterSellerView(props) {
  const { t, i18n, error } = props;
  const rtl = i18n.languages[0] == "pk" ? "text-right" : "";

  return (
    <div className="container mb-5">
      <div className="card mx-auto mt-5 pb-3 shadow rounded w-50">
        <div className="card-body">
          <h4 className={`card-title ${rtl}`}>{t("register_seller.title")}</h4>
          {/* <!-- Seller Register Form Start --> */}
          <form autoComplete="off" onSubmit={props.handleSubmit} noValidate>
            <TextFieldInput
              type="text"
              name="username"
              className={`form-control ${rtl}`}
              id="username"
              value={props.username}
              lblText={t("register_seller.lbl_your_name")}
              i18n={i18n}
              t={t}
              disabled={true}
            />
            <TextFieldInput
              type="text"
              name="email"
              className={`form-control ${rtl}`}
              id="email"
              value={props.email}
              lblText={t("register_seller.lbl_email")}
              i18n={i18n}
              t={t}
              disabled={true}
            />
            <TextFieldInput
              type="text"
              name="companyName"
              className={`form-control ${rtl}`}
              id="companyName"
              value={props.companyName}
              lblText={t("register_seller.lbl_seller_name")}
              infoText={t("register_seller.helper_text_seller_name")}
              i18n={i18n}
              t={t}
              placeholder={"ABC Pvt. Ltd."}
              error={error.companyName}
              onChange={props.handleChange}
            />
            <TextAreaInput
              name="companyDescription"
              className={`form-control ${rtl}`}
              id="companyDescription"
              value={props.companyDescription}
              lblText={t("register_seller.lbl_description")}
              infoText={t("register_seller.helper_text_description")}
              i18n={i18n}
              t={t}
              error={error.companyDescription}
              onChange={props.handleChange}
            />
            <button
              type="submit"
              className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}
            >
              {t("register_seller.btn_text")}
            </button>
          </form>
          {/* <!-- Seller Register Form Ends --> */}
        </div>
      </div>
    </div>
  );
}

export default RegisterSellerView;

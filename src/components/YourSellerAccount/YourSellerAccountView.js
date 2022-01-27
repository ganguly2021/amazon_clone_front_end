import React from "react";
import { NavLink } from "react-router-dom";

function YourSellerAccountView(props) {
  const { t, i18n } = props;
  const rtl = i18n.languages[0] == "pk" ? "text-right" : "";

  return (
    <div className="container mt-5">
      <h2 className={`${rtl}`}>{t("your_seller_account.title")}</h2>
      {/* <!-- Seller Account Panel Starts --> */}
      <div className="row">
        <div className="col-md-4">
          <NavLink to="/pending_orders" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-truck"></i>
                  <span className={`h4 ${rtl}`}>
                    {t("your_seller_account.btn1.title")}
                  </span>
                </div>
                <small className={`text-muted ${rtl}`}>
                  {t("your_seller_account.btn1.sub_title")}
                </small>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col-md-4">
          <NavLink to="/add_new_product" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-cart-plus"></i>
                  <span className={`h4 ${rtl}`}>
                    {t("your_seller_account.btn2.title")}
                  </span>
                </div>
                <small className={`text-muted ${rtl}`}>
                  {t("your_seller_account.btn2.sub_title")}
                </small>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col-md-4">
          <NavLink to="/seller_update_account" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-user-edit"></i>
                  <span className={`h4 ${rtl}`}>
                    {t("your_seller_account.btn3.title")}
                  </span>
                </div>
                <small className={`text-muted ${rtl}`}>
                  {t("your_seller_account.btn3.sub_title")}
                </small>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      {/* <!-- Seller Account Panel Starts --> */}

      <div className="row">
        <div className="col-md-4">
          <NavLink to="/seller_product_list" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-list-ol"></i>
                  <span className={`h4 ${rtl}`}>
                    {t("your_seller_account.btn4.title")}
                  </span>
                </div>
                <small className={`text-muted ${rtl}`}>
                  {t("your_seller_account.btn4.sub_title")}
                </small>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="col-md-4">
          <NavLink to="/close_seller_account" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-store-alt-slash"></i>
                  <span className={`h4 ${rtl}`}>
                    {t("your_seller_account.btn5.title")}
                  </span>
                </div>
                <small className={`text-muted ${rtl}`}>
                  {t("your_seller_account.btn5.sub_title")}
                </small>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default YourSellerAccountView;

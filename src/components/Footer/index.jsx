/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer
      className={`footer-half ${noSubBG ? "" : "sub-bg"} section-padding pb-0`}
    >
      <div className="container" id="Contact">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <h4 style={{ color: "white" }}>XTEND</h4>
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> hello@extend.com
                  </li>
                  <li>
                    <span>Address : </span> Dubai
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>© 2023, XTENT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

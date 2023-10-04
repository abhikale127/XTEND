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
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <h3>XTEND</h3>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Cloudpoint Technologies Private Limited </span>
                  </li>
                  <li>
                    <span>Address : </span> 91 SPINGBOARD, 74 TECHNO PARK 74/II,
                    C-CROSS ROAD, OPP SEEPZ GATE NO.2, Andheri East, Mumbai,
                    Maharashtra 400093
                  </li>
                  {/* <li>
                    <span>Phone : </span> (+1) 2345 678 44 88
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>© 2023, XTEND</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

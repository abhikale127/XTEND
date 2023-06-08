/* eslint-disable @next/next/no-img-element */
import React from "react";
import Clients1Data from "../../data/sections/clients1.json";
import Split from "../Split";
import Link from "next/link";

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data.slice(0, Clients1Data.length / 2);
  var second = Clients1Data.slice(4, Clients1Data.length);
  return (
    <section className={`clients section-padding ${subBG ? "sub-bg" : ""}`}>
      <h2
        style={{ textAlign: "center" }}
        className="extra-title wow words chars splitting"
        data-splitting
      >
        Founders
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <img
            src="/img/slid/vinod.png"
            alt="image"
            style={{ marginBottom: "1rem" }}
          />
          <button className="btn-curve btn-color btn-lg">
            <a href="https://www.linkedin.com/in/vinod-cloudsocial/">
              {" "}
              <i className="fab fa-linkedin founder-i"></i> <span>Connect</span>{" "}
            </a>
          </button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <img
            src="/img/slid/himanshu.png"
            alt="image"
            style={{ marginBottom: "1rem" }}
          />
          <button className="btn-curve btn-color btn-lg">
            <a href="https://www.linkedin.com/in/himanshu-patil-cloudsocial/">
              {" "}
              <i className="fab fa-linkedin founder-i"></i> <span>Connect</span>{" "}
            </a>
          </button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <img
            src="/img/slid/rahul.png"
            alt="image"
            style={{ marginBottom: "1rem" }}
          />

          <a href="https://www.linkedin.com/in/rahul-raina-a72168a3/">
            <button
              style={{ width: "100%" }}
              className="btn-curve btn-color btn-lg"
            >
              <i className="fab fa-linkedin founder-i"></i> Connect
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients1;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Clients1Data from "../../data/sections/clients1.json";
import Split from "../Split";

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data.slice(0, Clients1Data.length / 2);
  var second = Clients1Data.slice(4, Clients1Data.length);
  return (
    <section className={`clients section-padding ${subBG ? "sub-bg" : ""}`}>
      <img id="About" src="/img/slid/5.png" alt="image" />
    </section>
  );
};

export default Clients1;

import React from "react";
import Briefcase from "../assets/Briefcase.png";
import StatBoard from "../assets/StatBoard.png";
import AsideCss from "./Aside.module.css";

const CompanyLogo = () => {
  return (
    <div className={AsideCss.stat_logo}>
      <img className={AsideCss.logo_img} src={Briefcase} alt="briefcase" />
      <img className={AsideCss.logo_name}  src={StatBoard} alt="StatBoard" />
    </div>
  );
};

export default CompanyLogo;

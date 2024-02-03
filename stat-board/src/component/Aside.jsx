import React from "react";
import AsideCss from "./Aside.module.css";
import CompanyLogo from "./CompanyLogo";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";

const Aside = () => {
  return (
    <div className={AsideCss.aside}>
      <CompanyLogo />
      <ul className={AsideCss.navbar}>
        <Navbar />
      </ul>
      <div className={AsideCss.logout}>
      <LogoutButton/>
      </div>
    </div>
  );
};

export default Aside;

import React, { useState } from "react";
import ContentCss from "../Content.module.css";
import user from "../../assets/Rectangle 10.png";
import Wish from "./Wish";
import CompanyLogo from "../CompanyLogo";
import Navbar from "../Navbar";
import LogoutButton from "../LogoutButton";

const Header = () => {

  const [menu, setMenu] = useState(false);
  return (
    <div className={ContentCss.header}>
      <div className={ContentCss.hamburger} onClick={()=>setMenu(!menu)}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className={ContentCss.logo}>
        <CompanyLogo />
      </div>
      <div className={ContentCss.wish}>
        <Wish />
      </div>
      <div className={ContentCss.user}>
        <div className={ContentCss.user_details}>
          <p className={ContentCss.user_name}>John Doe</p>
          <p className={ContentCss.user_email}>john@doe.com</p>
        </div>
        <div className={ContentCss.user_profile}>
          <img src={user} alt="user" />
        </div>
      </div>
      <ul className={menu ? ContentCss.navbar : ContentCss.navbar_hide}>
        <Navbar/>
        <LogoutButton/>
      </ul>
    </div>
  );
};

export default Header;

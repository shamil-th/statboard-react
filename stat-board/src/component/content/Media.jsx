import React from "react";
import MediaCss from "./Media.module.css";
import cover from "../../assets/media.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Media = () => {
  return (
    <div className={MediaCss.media_bg}>
      <img src={cover} alt="cover" />
      <div className={MediaCss.details}>
        <div className={MediaCss.media_name}>
          <h4>John Doe</h4>
          <small>CEO</small>
        </div>
        <div className={MediaCss.social_icons}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Media;

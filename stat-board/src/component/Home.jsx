import React from "react";
import HomeCss from "./Home.module.css";
import Aside from "./Aside";
import Content from "./Content";

const Home = () => {
  return (
    <div className={HomeCss.home}>
      <Aside />
      <Content />
    </div>
  );
};

export default Home;

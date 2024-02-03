import React from "react";
import ContentCss from "./Content.module.css";
import Header from "./content/Header";
import Graphs from "./content/Graphs";
import TableSection from "./content/TableSection";
import Wish from "./content/Wish";

const Content = () => {
  return (
    <div className={ContentCss.content}>
      <Header />
      <div className={ContentCss.content_sec}>
        <div className={ContentCss.wishes}><Wish/></div>
        <Graphs />
        <TableSection />
      </div>
    </div>
  );
};

export default Content;

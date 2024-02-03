import React from "react";
import TableCss from "./Table.module.css";
import Media from "./Media";
import Table from "./Table";

const TableSection = () => {
  return (
    <div className={TableCss.tablesec}>
      <Table />
      <Media />
    </div>
  );
};

export default TableSection;

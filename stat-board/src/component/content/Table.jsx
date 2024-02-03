import React, { useEffect, useState } from "react";
import TableCSs from "./Table.module.css";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { tableData } from "../../feature/statBoard/statSlice";

const Table = () => {
  const tableItems = useSelector((state) => state.stats.table);
  const dataLength = useSelector((state) => state.stats.tableLength);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tableData());
  }, [dispatch]);

  const totalButtons = Math.ceil(dataLength / limit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalButtons; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            currentPage === i ? TableCSs.activePage : TableCSs.inActivePage
          }
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  return (
    <div className={TableCSs.table}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.slice(startIndex, endIndex).map((data, index) => (
            <TableRow data={data} index={index + startIndex} key={data.id} />
          ))}
        </tbody>
      </table>
      <div className={TableCSs.paginations}>
        {currentPage === 1 ? (
          <button className={TableCSs.arrow} style={{ opacity: 0.5 }} disabled>
            <span class="material-symbols-outlined">arrow_back_ios</span>
          </button>
        ) : (
          <button
            className={TableCSs.inActivePage}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {" "}
            <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
          </button>
        )}
        {renderPaginationButtons()}
        {currentPage === totalButtons ? (
          <button className={TableCSs.arrow}  style={{ opacity: 0.5 }} disabled>
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        ) : (
          <button
            className={TableCSs.inActivePage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {" "}
            <span class="material-symbols-outlined">
              arrow_forward_ios
            </span>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;

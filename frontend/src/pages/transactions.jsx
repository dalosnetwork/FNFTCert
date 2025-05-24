// SidebarLayout.jsx
import React, { useState } from "react";
import List from "../components/list";
import Icon from "../components/iconManager";
import DateFilter from "../components/date";
import Button1 from "../components/button1";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    pageNumbers.push(1);
    if (currentPage > 3) {
      pageNumbers.push("...");
    }
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(currentPage + 2, 10);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="">
      <div
        className="row inner d-flex gap-2"
        style={{ height: "40px", margin: "10px 0" }}
      >
        <div className="col p-0 d-flex">
          <div className="search font16 semibold">
            <Icon name="search" /> <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-auto p-0 d-flex my-auto font16 semibold">
          Grams:
        </div>
        <div className="col-auto p-0 d-flex">
          <div className="search font16 semibold sm">
            Min: <input type="text" name="" id="" />
          </div>
        </div>
        <div className="col-auto p-0 d-flex">
          <div className="search font16 semibold sm">
            Max: <input type="text" name="" id="" />
          </div>
        </div>
        <div className="col-auto p-0 d-flex">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle white"
              role="button"
              id="dropdownDate"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span className="d-flex align-items-center">
                <Icon name={"date"} />
              </span>
            </button>
            <ul className="dropdown-menu p-0" aria-labelledby="">
              <DateFilter />
            </ul>
          </div>
        </div>
        <div className="col-auto p-0 d-flex">
          <Button1 label="Export to cvs." />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <List />
        </div>
      </div>
      <div className="row inner mt-4 ">
        <div className="col-12 justify-content-center">
          <div className="pagination1">
            <div className="row d-flex justify-content-between">
              <div className="col-2 paragraphsm d-flex my-auto gray500">
                Page {currentPage} of {1}
              </div>
              <div className="col-8 d-flex justify-content-center">
                <button
                  disabled={currentPage === 1}
                  className="paginationButton"
                >
                  <Icon name={"previous"} />
                </button>

                {generatePageNumbers().map((page, index) => (
                  <div className="my-auto d-flex align-items-center" key={index}>
                    <Button1
                      onClick={() => handlePageClick(page)}
                      className={
                        page === currentPage
                          ? "paginationButton active"
                          : "paginationButton"
                      }
                      label={page}
                    />
                  </div>
                ))}

                <button
                  disabled={
                    currentPage === 0
                  }
                  className="paginationButton"
                >
                  <Icon name={"next"} />
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

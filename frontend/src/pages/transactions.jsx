// SidebarLayout.jsx
import React, { useEffect, useState } from "react";
import List from "../components/list";
import Icon from "../components/iconManager";
import DateFilter from "../components/date";
import Button1 from "../components/button1";
import { getTransactionData } from "../store/features/transactiondata/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { downloadCSV } from "../services/api";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState("10");
  const [searchFilter, setSearchFilter] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [minGram, setMinGram] = useState(null);
  const [maxGram, setMaxGram] = useState(null);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const { transaction } = useSelector((state) => state.transaction);
  const filter = {
    page: currentPage,
    per_page: rowPerPage,
    search: searchFilter,
    date_from: fromDate,
    date_to: toDate,
    min_gr: minGram,
    max_gr: maxGram,
    sort_by: sortBy,
    sort_order: sortOrder,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionData(filter));
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    minGram: null,
    maxGram: null,
    fromDate: null,
    toDate: null,
  });

  const handleFilter = (key) => {
    const newSortOrder =
      sortBy === key ? (sortOrder === "asc" ? "desc" : "asc") : "asc";

    setSortBy(key);
    setSortOrder(newSortOrder);

    const newFilters = {
      search: searchFilter,
      minGram: minGram,
      maxGram: maxGram,
      fromDate: fromDate,
      toDate: toDate,
      sort_by: key,
      sort_order: newSortOrder,
    };

    setAppliedFilters(newFilters);

    dispatch(
      getTransactionData({
        page: 1,
        per_page: rowPerPage,
        search: newFilters.search,
        min_gr: newFilters.minGram,
        max_gr: newFilters.maxGram,
        date_from: newFilters.fromDate,
        date_to: newFilters.toDate,
        sort_by: newFilters.sort_by,
        sort_order: newFilters.sort_order,
      })
    );
  };

  const handleDateRange = (from, to) => {
    setFromDate(from);
    setToDate(to);

    const newFilters = {
      ...appliedFilters,
      fromDate: from,
      toDate: to,
    };
    setAppliedFilters(newFilters);

    dispatch(
      getTransactionData({
        page: 1,
        per_page: rowPerPage,
        search: newFilters.search,
        min_gr: newFilters.minGram,
        max_gr: newFilters.maxGram,
        date_from: from,
        date_to: to,
      })
    );
  };

  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    dispatch(getTransactionData({ page: newPage, per_page: rowPerPage }));
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    dispatch(getTransactionData({ page: newPage, per_page: rowPerPage }));
  };

  const handlePageClick = (page) => {
    if (page !== "...") {
      setCurrentPage(page);
      dispatch(getTransactionData({ page: page, per_page: rowPerPage }));
    }
  };

  const handleRowPerPage = (row) => {
    setRowPerPage(row);
    setCurrentPage(1);
    dispatch(getTransactionData({ page: 1, per_page: row }));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    pageNumbers.push(1);
    if (currentPage > 3) {
      pageNumbers.push("...");
    }
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(currentPage + 2, transaction?.total_pages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (currentPage < transaction?.total_pages - 2) {
      pageNumbers.push("...");
    }
    if (transaction?.total_pages > 1) {
      pageNumbers.push(transaction?.total_pages);
    }

    return pageNumbers;
  };

  const handleSearchChange = (e) => {
    setSearchFilter(e.target.value);
  };
  const handleMinChange = (e) => {
    setMinGram(e.target.value);
  };
  const handleMaxChange = (e) => {
    setMaxGram(e.target.value);
  };
  const renderActiveFilters = () => {
    const filters = [];

    if (appliedFilters.search) {
      filters.push(
        <div className="col-auto p-1">
          <button
            className={"button1 borderTeal filterRemove semibold font14"}
            onClick={() => clearFilter("search")}
          >
            Search: {appliedFilters.search}
            <span className="ms-3 semibold">x</span>
          </button>
        </div>
      );
    }

    if (appliedFilters.minGram) {
      filters.push(
        <div className="col-auto p-1">
          <button
            className={"button1 borderTeal filterRemove semibold font14"}
            onClick={() => clearFilter("minGram")}
          >
            Min Gr.: {appliedFilters.minGram}
            <span className="ms-3 semibold">x</span>
          </button>
        </div>
      );
    }

    if (appliedFilters.maxGram) {
      filters.push(
        <div className="col-auto p-1">
          <button
            className={"button1 borderTeal filterRemove semibold font14"}
            onClick={() => clearFilter("maxGram")}
          >
            Max Gr.: {appliedFilters.maxGram}
            <span className="ms-3 semibold">x</span>
          </button>
        </div>
      );
    }

    if (appliedFilters.fromDate || appliedFilters.toDate) {
      filters.push(
        <div className="col-auto p-1">
          <button
            className={"button1 borderTeal filterRemove semibold font14"}
            onClick={() => clearFilter("date")}
          >
            Date: {formatDate(appliedFilters.fromDate) || "…"} →{" "}
            {formatDate(appliedFilters.toDate) || "…"}
            <span className="ms-3 semibold">x</span>
          </button>
        </div>
      );
    }

    if (filters.length > 0) {
      filters.push(
        <div className="col-auto ms-auto">
          <button
            className={"button1 borderTeal filterRemove semibold font14"}
            onClick={clearAllFilters}
          >
            Clear Filters
            <span className="ms-3 semibold">x</span>
          </button>
        </div>
      );
    }

    return filters;
  };
  const clearFilter = (key) => {
    const newApplied = { ...appliedFilters };

    if (key === "date") {
      newApplied.fromDate = null;
      newApplied.toDate = null;
      setFromDate(null);
      setToDate(null);
    } else {
      newApplied[key] = key === "search" ? "" : null;
      if (key === "search") setSearchFilter("");
      if (key === "minGram") setMinGram(null);
      if (key === "maxGram") setMaxGram(null);
    }

    setAppliedFilters(newApplied);

    dispatch(
      getTransactionData({
        page: 1,
        per_page: rowPerPage,
        search: newApplied.search,
        min_gr: newApplied.minGram,
        max_gr: newApplied.maxGram,
        date_from: newApplied.fromDate,
        date_to: newApplied.toDate,
      })
    );
  };
  const clearAllFilters = () => {
    setSearchFilter("");
    setMinGram(null);
    setMaxGram(null);
    setFromDate(null);
    setToDate(null);

    const cleared = {
      search: "",
      minGram: null,
      maxGram: null,
      fromDate: null,
      toDate: null,
    };
    setAppliedFilters(cleared);

    dispatch(
      getTransactionData({
        page: 1,
        per_page: rowPerPage,
      })
    );
  };

  const handleDownload = async () => {
    try {
      const data = await downloadCSV();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="">
      <div
        className="row inner d-flex gap-2"
        style={{ height: "40px", margin: "10px 0" }}
      >
        <div className="col p-0 d-flex">
          <div className="search font16 semibold">
            <Icon name="search" />{" "}
            <input
              type="text"
              placeholder="Search"
              value={searchFilter}
              onChange={handleSearchChange}
              maxLength={100}
            />
          </div>
        </div>
        <div className="col-auto p-0 d-flex my-auto font16 semibold">
          Grams:
        </div>
        <div className="col-auto p-0 d-flex">
          <div className="search font16 semibold sm">
            Min:{" "}
            <input
              type="text"
              value={minGram}
              onChange={handleMinChange}
              maxLength={5}
            />
          </div>
        </div>
        <div className="col-auto p-0 d-flex">
          <div className="search font16 semibold sm">
            Max:{" "}
            <input
              type="text"
              value={maxGram}
              onChange={handleMaxChange}
              maxLength={5}
            />
          </div>
        </div>
        <div className="col-auto my-auto p-0">
          <span onClick={() => handleFilter()} className="pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.333 0C18.293 0 19.893 1.537 19.995 3.472L20 3.667V16.333C20 18.293 18.463 19.893 16.528 19.995L16.333 20H3.667C2.72818 20 1.82509 19.64 1.1438 18.9941C0.462517 18.3481 0.0549239 17.4655 0.00500011 16.528L0 16.333V3.667C0 1.707 1.537 0.107 3.472 0.00500011L3.667 0H16.333ZM13.707 7.293C13.5195 7.10553 13.2652 7.00021 13 7.00021C12.7348 7.00021 12.4805 7.10553 12.293 7.293L9 10.585L7.707 9.293L7.613 9.21C7.41201 9.05459 7.1594 8.98151 6.90647 9.0056C6.65355 9.02969 6.41928 9.14916 6.25125 9.33972C6.08321 9.53029 5.99402 9.77767 6.00177 10.0316C6.00953 10.2856 6.11365 10.527 6.293 10.707L8.293 12.707L8.387 12.79C8.5794 12.9393 8.81966 13.0132 9.06268 12.9979C9.30571 12.9826 9.53481 12.8792 9.707 12.707L13.707 8.707L13.79 8.613C13.9393 8.4206 14.0132 8.18034 13.9979 7.93732C13.9826 7.69429 13.8792 7.46519 13.707 7.293Z"
                fill="#4CBD9A"
              />
            </svg>
          </span>
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
              <DateFilter onDateRangeSelect={handleDateRange} />
            </ul>
          </div>
        </div>
        <div className="col-auto p-0 d-flex">
          <Button1 onClick={() => handleDownload()} label="Export to cvs." />
        </div>
      </div>
      <div className="row inner unique" style={{ marginBottom: "10px" }}>
        {renderActiveFilters()}
      </div>
      <div className="row">
        <div className="col-12">
          <List
            data={transaction.data}
            sortBy={sortBy}
            sortOrder={sortOrder}
            handleFilter={handleFilter}
          />
        </div>
      </div>
      <div className="row inner mt-4 ">
        <div className="col-12 justify-content-center">
          <div className="pagination1">
            <div className="row d-flex justify-content-between">
              <div className="col-2">
                <div class="dropdown">
                  <button
                    class="button1 softTeal dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="bold">show: </span>
                    {rowPerPage}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li onClick={() => handleRowPerPage(5)}>5</li>
                    <li onClick={() => handleRowPerPage(10)}>10</li>
                    <li onClick={() => handleRowPerPage(20)}>20</li>
                    <li onClick={() => handleRowPerPage(50)}>50</li>
                  </ul>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-center">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePrevious()}
                  className="paginationButton"
                >
                  <Icon name={"previous"} />
                </button>

                {generatePageNumbers().map((page, index) => (
                  <div
                    className="my-auto d-flex align-items-center"
                    key={index}
                  >
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
                  disabled={currentPage >= transaction.total_pages}
                  onClick={() => handleNext()}
                  className="paginationButton"
                >
                  <Icon name={"next"} />
                </button>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div class="dropdown">
                  <button
                    class="button1 softTeal dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="bold">Page:</span>{" "}
                    {transaction.total_pages == 0 ? "0" : currentPage}/
                    {transaction.total_pages}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {Array.from(
                      { length: transaction.total_pages },
                      (_, index) => (
                        <li
                          onClick={() => handlePageClick(index + 1)}
                          key={index}
                        >
                          {index + 1}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  subDays,
  startOfMonth,
  startOfQuarter,
  startOfYear,
} from "date-fns";
import Button1 from "./button1";
import Icon from "./iconManager";

const DateFilter = ({ handleFilter }) => {
  const [fromMonth, setFromMonth] = useState(new Date());
  const [toMonth, setToMonth] = useState(new Date());
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    const dropdownContainer = e.target.closest(".dropdown");
    if (!dropdownContainer) return;
    const toggleEl = dropdownContainer.querySelector('[data-bs-toggle="dropdown"]');
    if (!toggleEl) return;
    let dropdownInstance = window.bootstrap.Dropdown.getInstance(toggleEl);
    if (!dropdownInstance) {
      dropdownInstance = new window.bootstrap.Dropdown(toggleEl);
    }

    if (fromDay) {
      const fromUTC = toFakeUTCFormat(fromDay);
      handleFilter("start_date", fromUTC);
    } else {
      handleFilter("start_date", null);
    }
    if (toDay) {
      const toUTC = toFakeUTCFormat(toDay);
      handleFilter("end_date", toUTC);
    } else {
      handleFilter("end_date", null);
    }

    dropdownInstance.hide();
  };

  const handleDefault = (e, period) => {
    
    e.preventDefault();

    const dropdownContainer = e.target.closest(".dropdown");
    if (!dropdownContainer) return;
    const toggleEl = dropdownContainer.querySelector('[data-bs-toggle="dropdown"]');
    if (!toggleEl) return;
    let dropdownInstance = window.bootstrap.Dropdown.getInstance(toggleEl) ?? new window.bootstrap.Dropdown(toggleEl);

    const now = new Date();
    let fromDate = null;
    let toDate = now;

    switch (period) {
      case "today":
        fromDate = now;
        break;
      case "last7days":
        fromDate = subDays(now, 6);
        break;
      case "last14days":
        fromDate = subDays(now, 13);
        break;
      case "last30days":
        fromDate = subDays(now, 29);
        break;
      case "last3months":
        fromDate = subMonths(now, 3);
        break;
      case "last12months":
        fromDate = subMonths(now, 12);
        break;
      case "monthToDate":
        fromDate = startOfMonth(now);
        break;
      case "quarterToDate":
        fromDate = startOfQuarter(now);
        break;
      case "yearToDate":
        fromDate = startOfYear(now);
        break;
      case "allTime":
        fromDate = null;
        toDate = null;
        break;
      default:
        return; 
    }

    const fmt = (d) => (d ? toFakeUTCFormat(d) : null);
    handleFilter("start_date", fmt(fromDate));
    handleFilter("end_date", fmt(toDate));

    dropdownInstance.hide();
  };
  const pad = (n) => String(n).padStart(2, "0");
  const toFakeUTCFormat = (date) => {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T00:00:00.000Z`;
  };

  const getDays = (month) => {
    const monthStart = startOfMonth(month);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const days = [];

    for (let i = 0; i < 42; i++) {
      days.push(addDays(startDate, i));
    }

    return days;
  };

  const weekdays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), i), "EEE")
  );

  const renderCalendar = (month, setMonth, label) => {
    const days = getDays(month);

    return (
      <>
        <div className="date">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <button className="monthButton" onClick={() => setMonth(subMonths(month, 1))}>
              <Icon name={"previous"} />
            </button>
            <div>{format(month, "MMMM yyyy")}</div>
            <button className="monthButton form2" onClick={() => setMonth(addMonths(month, 1))}>
              <Icon name={"next"} />
            </button>
          </div>
          <div className="dayLabel" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {weekdays.map((day) => (
              <div className="form3" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {days.map((day) => (
              <div
                className={`day form2 ${
                  fromDay instanceof Date && day.getTime() === fromDay.getTime()
                    ? "from"
                    : toDay instanceof Date && day.getTime() === toDay.getTime()
                    ? "to"
                    : fromDay instanceof Date && toDay instanceof Date && day > fromDay && day < toDay
                    ? "middle"
                    : ""
                }`}
                key={day}
                style={{
                  textAlign: "center",
                  color: "#000",
                  opacity: format(day, "MM") === format(month, "MM") ? 1 : 0,
                  pointerEvents: format(day, "MM") === format(month, "MM") ? "auto" : "none",
                }}
                onClick={() => {
                  const selected = new Date(day);

                  if (label === "from") {
                    if (fromDay && selected.getTime() === fromDay.getTime()) {
                      setFromDay(null);
                    } else {
                      if (toDay && selected > toDay) {
                        setToDay(null);
                      }
                      setFromDay(selected);
                    }
                  } else {
                    if (toDay && selected.getTime() === toDay.getTime()) {
                      setToDay(null);
                    } else {
                      if (fromDay && selected < fromDay) {
                        return;
                      }
                      setToDay(selected);
                    }
                  }
                }}
              >
                {format(day, "d")}
              </div>
            ))}
          </div>
          {label == "from" ? (
            <>
              <Button1
                className={"dateButton text4 d-flex justify-content-center my-3"}
                style={{ width: "100%" }}
                label={fromDay ? format(fromDay, "dd.MM.yyyy") : "Select From"}
              />
              <Button1
                className={"gray text2 d-flex justify-content-center"}
                style={{ width: "100%" }}
                label={"Clear"}
                onClick={() => {
                  setFromDay("");
                  setToDay("");
                }}
              />
            </>
          ) : label == "to" ? (
            <>
              <Button1
                className={"dateButton text4 d-flex justify-content-center my-3"}
                style={{ width: "100%" }}
                label={toDay ? format(toDay, "dd.MM.yyyy") : "Select To"}
              />
              <Button1
                className={"red d-flex justify-content-center"}
                style={{ width: "100%", fontSize: "16px", fontWeight: "300" }}
                label={"Save"}
                onClick={handleSave}
              />
            </>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className="dateWrapper text-center d-flex justify-content-center">
      <div className="">
        <ul
          className="text-start"
          style={{ listStyle: "none", width: "145px", padding: "24px", gap: "12px", display: "grid" }}
        >
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "today")}>Today</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "last7days")}>Last 7 days</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "last14days")}>Last 14 days</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "last30days")}>Last 30 days</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "last3months")}>Last 3 months</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "last12months")}>Last 12 months</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "monthToDate")}>Month to date</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "quarterToDate")}>Quarter to date</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "yearToDate")}>Year to date</li>
          <li className="form2 pointer" onClick={(e) => handleDefault(e, "allTime")}>All time</li>
        </ul>
      </div>
      {renderCalendar(fromMonth, setFromMonth, "from")}
      {renderCalendar(toMonth, setToMonth, "to")}
    </div>
  );
};

export default DateFilter;

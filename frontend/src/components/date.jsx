import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  startOfMonth,
} from "date-fns";
import Button1 from "./button1";
import Icon from "./iconManager";

const DateFilter = ({ onDateRangeSelect }) => {
  const [fromMonth, setFromMonth] = useState(new Date());
  const [toMonth, setToMonth] = useState(new Date());
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const dropdownContainer = e.target.closest(".dropdown");
    if (!dropdownContainer) return;
    const toggleEl = dropdownContainer.querySelector(
      '[data-bs-toggle="dropdown"]'
    );
    if (!toggleEl) return;
    let dropdownInstance = window.bootstrap.Dropdown.getInstance(toggleEl);
    if (!dropdownInstance) {
      dropdownInstance = new window.bootstrap.Dropdown(toggleEl);
    }

    const fromUTC = fromDay ? toFakeUTCFormat(fromDay) : null;
    const toUTC = toDay ? toFakeUTCFormat(toDay) : null;

    onDateRangeSelect(fromUTC, toUTC); // ✅ single callback with both values

    dropdownInstance.hide();
  };

  const pad = (n) => String(n).padStart(2, "0");
  const toFakeUTCFormat = (date) => {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}`;
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
          <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
            <button
              className="monthButton"
              onClick={() => setMonth(subMonths(month, 1))}
            >
              <Icon name={"datePrevious"} />
            </button>
            <div className="semibold font14 ">{format(month, "MMMM yyyy")}</div>
            <button
              className="monthButton semibold font14 "
              onClick={() => setMonth(addMonths(month, 1))}
            >
              <Icon name={"dateNext"} />
            </button>
          </div>
          <div
            className="dayLabel my-3"
            style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
          >
            {weekdays.map((day) => (
              <div className="semibold font14 " key={day}>
                {day}
              </div>
            ))}
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
          >
            {days.map((day) => (
              <div
                className={`day semibold font14  ${
                  fromDay instanceof Date && day.getTime() === fromDay.getTime()
                    ? "from"
                    : toDay instanceof Date && day.getTime() === toDay.getTime()
                    ? "to"
                    : fromDay instanceof Date &&
                      toDay instanceof Date &&
                      day > fromDay &&
                      day < toDay
                    ? "middle"
                    : ""
                }`}
                key={day}
                style={{
                  textAlign: "center",
                  color: "#000",
                  opacity: format(day, "MM") === format(month, "MM") ? 1 : 0,
                  pointerEvents:
                    format(day, "MM") === format(month, "MM") ? "auto" : "none",
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
        </div>
      </>
    );
  };

  return (
    <div className="dateWrapper">
      <div className="row d-flex align-items-center">
        <div className="col-6">
          {renderCalendar(fromMonth, setFromMonth, "from")}
        </div>
        <div className="col-6">{renderCalendar(toMonth, setToMonth, "to")}</div>
        <div className="col-12 d-flex justify-content-between">
          <div className=" my-auto">
            <Button1
              className={
                "dateButton borderTeal semibold font16  d-flex justify-content-center"
              }
              style={{ width: "186px" }}
              label={fromDay ? format(fromDay, "dd.MM.yyyy") : "Select From"}
            />
          </div>
          <div className="my-auto">-</div>
          <div className=" my-auto">
            <Button1
              className={
                "dateButton borderTeal semibold font16  d-flex justify-content-center"
              }
              style={{ width: "186px" }}
              label={toDay ? format(toDay, "dd.MM.yyyy") : "Select To"}
            />
          </div>
          <div className=" p-0 my-auto">
            <Button1
              className={
                "semibold borderGray font16 d-flex justify-content-center"
              }
              style={{ width: "93px" }}
              label={"Cancel"}
              onClick={() => {
                setFromDay("");
                setToDay("");
              }}
            />
          </div>
          <div className=" ps-0 my-auto">
            <Button1
              className={"semibold font14 d-flex justify-content-center"}
              style={{ width: "77px", fontSize: "16px" }}
              label={"Save"}
              onClick={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;

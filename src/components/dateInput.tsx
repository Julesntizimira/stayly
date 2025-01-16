"use client";
import { useEffect, useState } from "react";

interface DateInputProps {
  container: {
    date?: Date | null;
    setDate: (date: Date) => void;
  };
}

export default function DateInput(props: DateInputProps) {
  const { date, setDate } = props.container;

  const [calendarDisplay, setCalendarDisplay] = useState("none");
  const [caretStyle, setCaretStyle] = useState("fa-angle-up");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Store the selected date
  const [currentDate, setCurrentDate] = useState(new Date()); // Store the current month and year

  if (date && selectedDate === null) {
    setSelectedDate(date);
  }

  // Get the month name from the month index
  const getMonthName = (monthIndex: number) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
  };

  // Get the number of days in a month and the first day of the month (for rendering the calendar)
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate(); // Get the last day of the month
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay(); // Get the first day of the month
  };

  // Change the month
  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  // Handle day click (selection)
  const selectDay = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  // Generate the calendar days
  const renderCalendarDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = getFirstDayOfMonth(month, year);
    const daysInMonth = getDaysInMonth(month, year);

    const days = [];
    // Create empty cells for days before the 1st day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day-cont empty"></div>);
    }
    // Create the actual day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
      days.push(
        <div key={`day-${day}`} className={`day-cont ${isSelected ? "selected" : ""}`} onClick={() => selectDay(day)}>
          <p className={day === selectedDate?.getDate() ? "selected" : ""}
          >{day}</p>
        </div>
      );
    }
    return days;
  };

  // Change the year
  const changeYear = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() + offset);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [selectedDate]);

  return (
    <>
      <div className="checked-date"
        onClick={() => {
          setCalendarDisplay(prev => prev === "none" ? "flex" : "none");
          setCaretStyle(prev => prev === "fa-angle-up" ? "fa-angle-down" : "fa-angle-up");
        }}
      >
        <i className="fa-solid fa-calendar-days"></i>
        <p>{selectedDate ? selectedDate.toDateString() : "Select Date"}</p>
        <i className={`fa-solid ${caretStyle}`}></i>
      </div>
      <div className="calendar"
        style={{ display: calendarDisplay }}
      >
        <div className="calendar-title">
          <i className="fa-solid fa-angles-left" onClick={() => changeYear(-1)}></i>
          <i className="fa-solid fa-angle-left" onClick={() => changeMonth(-1)}></i>
          <p>{`${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`}</p>
          <i className="fa-solid fa-angle-right" onClick={() => changeMonth(1)}></i>
          <i className="fa-solid fa-angles-right" onClick={() => changeYear(1)}></i>
        </div>
        <div className="week-days">
          <p>SUN</p>
          <p>MON</p>
          <p>TUE</p>
          <p>WED</p>
          <p>THU</p>
          <p>FRI</p>
          <p>SAT</p>

        </div>
        <div className="month-days">
          {renderCalendarDays()}
        </div>
      </div>
    </>
  );
}

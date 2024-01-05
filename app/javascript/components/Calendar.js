import React from "react";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { useState, useEffect } from "react";
import moment from "moment/moment";

import { useMediaQuery } from "react-responsive";

// import Responsive from "react-responsive";
// export const Mobile = (props) => <Responsive {...props} maxWidth={767} />;
// export const Default = (props) => <Responsive {...props} minWidth={768} />;

const HORIZONTAL_ORIENTATION = "horizontal";
const VERTICAL_ORIENTATION = "vertical";

const cleanDates = (dates = {}) => {
  const calendarDates = [];

  for (const [key, value] of Object.entries(dates)) {
    if (value.availability === "unavailable") {
      calendarDates.push(moment(key));
    }
  }

  return calendarDates;
};

export default function Calendar() {
  const [orientation, setOrientation] = useState();
  const [hasCalendar, setHasCalendar] = useState(false);
  const [calendarDates, setCalendarDates] = useState([]);

  const isSM = useMediaQuery({ minWidth: 700 });
  const isMD = useMediaQuery({ minWidth: 1024 });
  const isLG = useMediaQuery({ minWidth: 1240 });

  // screens: {
  //   'sm': '576px',
  //   // => @media (min-width: 576px) { ... }

  //   'md': '960px',
  //   // => @media (min-width: 960px) { ... }

  //   'lg': '1440px',
  //   // => @media (min-width: 1440px) { ... }
  // },

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://guesty-api-proxy.sunflower-vacations.com/api/calendar?listing=firelodge");
      const json = await data.json();

      const dates = cleanDates(json.data);
      setCalendarDates(dates);
    }

    setHasCalendar(true);

    fetchData();
  }, []);

  const isDayBlocked = (momentDate) => {
    return calendarDates.some((date) => date.isSame(momentDate, "day"));
  };

  const handleDayClick = (day) => {
    // Redirect to a URL, you can modify this URL as needed
    // window.location.href = `https://example.com/date/${day.format('YYYY-MM-DD')}`;
    window.location.href = 'https://sunflowervacations.guestybookings.com/properties/655f8dac5544ad0011ddbe96'
  };

  return (
    <div id="calendar" className="pt-8">
      <h3 className="mb-4 text-2xl">Fire Lodge Calendar</h3>
      {hasCalendar && (
        <DayPickerRangeController
          numberOfMonths={isMD ? 3 : 2}
          initialVisibleMonth={() => moment()}
          isDayBlocked={isDayBlocked}
          minDate={moment()}
          orientation={isSM ? HORIZONTAL_ORIENTATION : VERTICAL_ORIENTATION}
          maxDate={moment().add(18, "months")}
          onDatesChange={handleDayClick}
        />
      )}
    </div>
  );
}

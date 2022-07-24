import React, { useContext } from "react";
import { DateManager } from "../util/calendarOperations";

const ScheduleCalendarContext = React.createContext();

export const useCalendar = () => useContext(ScheduleCalendarContext);

export const ScheduleCalendarProvider = ({ children }) => {
  const dateManager = new DateManager();
  return (
    <ScheduleCalendarContext.Provider value={{ dateManager }}>
      {children}
    </ScheduleCalendarContext.Provider>
  );
};

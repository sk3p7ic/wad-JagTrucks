export class DateManager {
  #weekOffset = 0;

  incrWeek() {
    this.#weekOffset += 1;
  }

  decrWeek() {
    this.#weekOffset -= 1;
  }

  get currentDate() {
    return new Date();
  }

  get weekDateRange() {
    const currentDate = new Date(); // Get today's date
    let days = [new Date(), new Date(), new Date(), new Date(), new Date()]; // Stores the dates for days of week
    // Calculate the days of the week
    days.forEach((day, index) => {
      // Calculate the day offset from Sunday
      const weekdayOffset =
        currentDate.getDate() - (currentDate.getDate() - currentDate.getDay());
      // Calculate the number of days in the past / future this date will be and account for offset from Sunday
      const offset = 7 * this.#weekOffset - weekdayOffset;
      // Set the date, using the index to help select which day it is
      day.setDate(day.getDate() + offset + (index + 1));
    });
    return {
      mon: days[0],
      tue: days[1],
      wed: days[2],
      thu: days[3],
      fri: days[4],
    };
  }
}

/**
 * Formats a date
 * @param {Date} date The date to format.
 */
export const formatDate = (date) => {
  const dateStringArr = date.toDateString().split(" ");
  dateStringArr.shift();
  return dateStringArr.join(" ");
};

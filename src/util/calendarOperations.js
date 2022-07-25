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
    let days = [new Date(), new Date(), new Date(), new Date(), new Date()];
    days.forEach((day, index) => {
      const offset = 7 * this.#weekOffset;
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

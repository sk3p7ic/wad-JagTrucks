export class DateManager {
  #currentSunday;

  constructor() {
    const currentDate = new Date();
    this.#currentSunday = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay())
    );
  }

  incrWeek() {
    this.#currentSunday = this.#currentSunday.getDate() + 7;
  }

  decrWeek() {
    this.#currentSunday = this.#currentSunday.getDate() - 7;
  }

  get currentDate() {
    return new Date();
  }

  get weekDateRange() {
    let mon = new Date();
    let tues = new Date();
    let wed = new Date();
    let thurs = new Date();
    let fri = new Date();
    mon.setDate(this.#currentSunday.getDate() + 1);
    tues.setDate(this.#currentSunday.getDate() + 2);
    wed.setDate(this.#currentSunday.getDate() + 3);
    thurs.setDate(this.#currentSunday.getDate() + 4);
    fri.setDate(this.#currentSunday.getDate() + 5);
    return {
      monday: mon,
      tuesday: tues,
      wednesday: wed,
      thursday: thurs,
      friday: fri,
    };
  }
}

/**
 * Formats a date
 * @param {Date} date The date to format.
 */
export const formatDate = (date) => {
  console.log(typeof date);
  return date.toDateString().split(" ").shift().join(" ");
};

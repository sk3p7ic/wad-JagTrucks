import truckSchedule from "../../data/example/schedule/2022-06.json";

export const getTrucksForWeek = (days) => {
  let trucks = new Map();
  Object.values(days).forEach((day) => {
    if (day.getFullYear() === 2022 && day.getMonth() === 6) {
      const dayTrucks = truckSchedule.find(
        (entry) => entry.date === day.getDate()
      );
      trucks.set(day.getDate(), dayTrucks?.trucks);
    }
  });
  return trucks;
};

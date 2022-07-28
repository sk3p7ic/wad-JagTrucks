import truckSchedule from "../../data/example/schedule/2022-06.json";

const _getTrucksForWeek = (days) => {
  let trucks = new Map();
  Object.values(days).forEach((day) => {
    if (day.getFullYear() === 2022 && day.getMonth() === 6) {
      const dayTrucks = truckSchedule.find(
        (entry) => entry.date === day.getDate()
      );
      trucks.set(day.getDate(), dayTrucks?.trucks);
      getAllTrucksForMonth(day.getFullYear(), day.getMonth());
    }
  });
  return trucks;
};

const getAllTrucksForMonth = (year, month) => {
  fetch(`/api/get/schedule/${year}/${month + 1}`)
    .then((res) => res.json())
    .then((sched) => {
      console.log(sched);
    });
};

const getScheduleForDay = async (day) => {
  const res = await fetch(
    `/api/get/schedule/${day.getFullYear()}/${
      day.getMonth() + 1
    }/${day.getDate()}`
  );
  const sched = await res.json();
  return sched;
};

export const getTrucksForWeek = async (days) => {
  let trucks = new Map();
  //Object.values(days).forEach(async (day) => {
  //  const res = await fetch(
  //    `/api/get/schedule/${day.getFullYear()}/${
  //      day.getMonth() + 1
  //    }/${day.getDate()}`
  //  );
  //  const sched = await res.json();
  //  trucks.set(day.getDate(), sched);
  //  console.log(trucks);
  //});
  for await (const day of Object.values(days)) {
    const sched = await getScheduleForDay(day);
    trucks.set(day.getDate(), sched);
  }
  return trucks;
};

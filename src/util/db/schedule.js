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
  for await (const day of Object.values(days)) {
    const sched = await getScheduleForDay(day);
    trucks.set(day.getDate(), sched);
  }
  return trucks;
};

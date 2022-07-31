export const getTruckDataFromId = async (truckId) => {
  const res = await fetch(`/api/get/trucks/${truckId}`);
  const truck = await res.json();
  return truck;
};

const getNeededTruckIds = (schedule) => {
  const neededTrucks = new Set();
  if (schedule === undefined || null) return neededTrucks;
  schedule.forEach((listing) => {
    listing.forEach((item) => {
      neededTrucks.add(item.truck_id);
    });
  });
  return neededTrucks;
};

export const getTruckDataFromTruckScheduleList = async (schedule) => {
  // Get the trucks that are in the schedule
  const neededTrucks = getNeededTruckIds(schedule);
  // Get the information for the trucks
  const truckData = new Map();
  if (neededTrucks.size === 0) return truckData;
  for await (const truckId of neededTrucks) {
    const truck = await getTruckDataFromId(truckId);
    truckData.set(truckId, truck);
  }
  return truckData;
};

export const getAllTrucks = async () => {
  const res = await fetch("/api/get/trucks");
  const trucks = await res.json();
  return Object.values(trucks);
};

export const truckQueryFilters = {
  foodType: "/api/query/trucks/foodType/",
  diningDollars: "/api/query/trucks/diningDollars/",
};

export const getTrucksByFilter = async (filterString, value) => {
  const res = await fetch(`${filterString}${value}`);
  const trucks = await res.json();
  return Object.values(trucks);
};

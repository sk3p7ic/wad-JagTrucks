import truck1 from "../../data/example/trucks/49dd8ac7-089a-45df-9288-14d51a782043.json";
import truck2 from "../../data/example/trucks/c90d9764-3dd8-4d1c-90f3-a00b7bc59931.json";
import truck3 from "../../data/example/trucks/f7530353-4de6-41a2-87aa-4250b6108034.json";

const id1 = { truckId: "49dd8ac7-089a-45df-9288-14d51a782043", ref: truck1 };
const id2 = { truckId: "c90d9764-3dd8-4d1c-90f3-a00b7bc59931", ref: truck2 };
const id3 = { truckId: "f7530353-4de6-41a2-87aa-4250b6108034", ref: truck3 };
const ids = [id1, id2, id3];

const getTruckDataFromId = async (truckId) => {
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
  //console.log(schedule);
  //for (const [date, listing] of schedule) {
  //  listing.forEach((item) => {
  //    console.log(item._id);
  //    neededTrucks.add(item._id);
  //  });
  //}
  return neededTrucks;
};

export const getTruckDataFromTruckScheduleList = async (schedule) => {
  // Get the trucks that are in the schedule
  const neededTrucks = getNeededTruckIds(schedule);
  // Get the information for the trucks
  const truckData = new Map();
  if (neededTrucks.size === 0) return truckData;
  //neededTrucks.forEach(async (truckId) => {
  //  const truck = await getTruckDataFromId(truckId);
  //  truckData.set(truckId, truck);
  //});
  for await (const truckId of neededTrucks) {
    const truck = await getTruckDataFromId(truckId);
    truckData.set(truckId, truck);
  }
  return truckData;
};

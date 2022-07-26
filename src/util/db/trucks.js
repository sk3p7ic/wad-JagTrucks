import truck1 from "../../data/example/trucks/49dd8ac7-089a-45df-9288-14d51a782043.json";
import truck2 from "../../data/example/trucks/c90d9764-3dd8-4d1c-90f3-a00b7bc59931.json";
import truck3 from "../../data/example/trucks/f7530353-4de6-41a2-87aa-4250b6108034.json";

const id1 = { truckId: "49dd8ac7-089a-45df-9288-14d51a782043", ref: truck1 };
const id2 = { truckId: "c90d9764-3dd8-4d1c-90f3-a00b7bc59931", ref: truck2 };
const id3 = { truckId: "f7530353-4de6-41a2-87aa-4250b6108034", ref: truck3 };
const ids = [id1, id2, id3];

export const getTruckDataFromId = (truckId) => {
  const truck = ids.find((val) => val.truckId === truckId);
  return truck.ref;
};

export const getTruckDataFromTruckScheduleList = (trucks) => {
  const data = new Map();
  for (const truckList of trucks.values()) {
    if (truckList !== undefined) {
      for (const truck of truckList.values()) {
        data.set(truck, getTruckDataFromId(truck.truckId));
      }
    }
  }
  return data;
};

export const addUser = async (data, accountType) => {
  let res, json;
  switch (accountType) {
    case "truck":
      res = await fetch("/api/set/users/newTruck/", {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      json = await res.json();
      return json;
    case "student":
      res = await fetch("/api/set/users/newStudent/", {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      json = await res.json();
      return json;
    default:
      return { success: false };
  }
};

export const signIn = async (datas) => {
  const res = await fetch("/api/signIn/truck/", {
    method: "post",
    body: JSON.stringify(datas),
    headers: { "Content-Type": "application/json" },
  });
  const isValid = await res.json();
  console.log(isValid);
  console.log(datas);
  return isValid;
};

/*{
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    truckName,
    password,
    confirmPassword,
    termCondAgree,
}*/

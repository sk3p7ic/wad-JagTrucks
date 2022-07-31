export const addUser = async (data) => {
  const res = await fetch("/api/set/users/", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  return json;
};

export const signIn = async (datas) => {
  const res = await fetch("/api/set/signIn/", {
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

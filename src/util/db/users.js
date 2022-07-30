export const addUser = async (data) => {
  const res = await fetch("/api/set/users/", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  console.log(res);
  console.log(data);
  return false;
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

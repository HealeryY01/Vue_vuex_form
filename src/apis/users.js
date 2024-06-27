import axios from "axios";
export const getAllUserApi = async () => {
  // proise , callback function , async/await
  const res = await axios({
    method: "GET", //GET , POST ,PUT ,DELETE
    url: "https://667d46ae297972455f645840.mockapi.io/user",
  });
  return res.data;
};

export const createUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://667d46ae297972455f645840.mockapi.io/user",
    data: user,
  });
  return res.data;
};

export const removeUserApi = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `https://667d46ae297972455f645840.mockapi.io/user/${id}`,
  });
  return res;
};

export const updateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://667d46ae297972455f645840.mockapi.io/user/${user.id}`,
    data: user,
  });
  return res;
};

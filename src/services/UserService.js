import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(`http://localhost:8080/api/login`, data);
  return res.data;
};

export const SignUpUser = async (data) => {
  const res = await axios.post(`http://localhost:8080/api/create-users`, data);
  return res.data;
};

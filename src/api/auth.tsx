import axios from "axios";
import { IUser } from "../interface/auth";

export const getAllUser = () => {
  return axios.get(`http://localhost:3000/users`);
};
export const getOneUser = (id: number) => {
  return axios.get(`http://localhost:3000/users/${id}`);
};
export const addUser = (user: IUser) => {
  return axios.post(`http://localhost:3000/users`, user);
};
export const editUser = (user: IUser) => {
  return axios.put(`http://localhost:3000/users/${user.id}`, user);
};

const deleteAuth = (id: number) => {
  return axios.delete(`http://localhost:3000/users/${id}`);
};
export default deleteAuth;

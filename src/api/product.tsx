import axios from "axios";
import { IProduct } from "../interface/product";

export const getAllPro = () => {
  return axios.get(`http://localhost:3000/products/?_expand=category`);
};
export const getOnePro = (id: number) => {
  return axios.get(`http://localhost:3000/products/${id}`);
};
export const addPro = (product: IProduct) => {
  return axios.post(`http://localhost:3000/products`, product);
};
export const editPro = (product: IProduct) => {
  return axios.put(`http://localhost:3000/products/${product.id}`, product);
};
export const deletePro = (id: number) => {
  return axios.delete(`http://localhost:3000/products/${id}`);
};

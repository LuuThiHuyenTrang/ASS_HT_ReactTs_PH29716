import axios from "axios"
import { ICategory } from "../interface/category"

export const getAllCate = () => {
    return axios.get(`http://localhost:3000/categories`)
}
export const getOneCate = (id:number) => {
    return axios.get(`http://localhost:3000/categories/${id}`)
}
export const addCate = (category:ICategory) => {
    return axios.post(`http://localhost:3000/categories`, category)
}
export const editCate = (category: ICategory) => {
    return axios.put(`http://localhost:3000/categories/${category.id}`, category)
}
export const deleteCate = (id:number) => {
    return axios.delete(`http://localhost:3000/categories/${id}`)
}

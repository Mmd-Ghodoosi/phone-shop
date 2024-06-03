import axios from "axios";

const SERVER_URL = "http://localhost:3009";

// @desc Get All Products
// @route GET http://localhost:3009/products/findProducts
export const getAllProducts = () => {
  const url = `${SERVER_URL}/products/findProducts`;
  return axios.get(url);
};

// @desc Get Product With Product ID
// @route GET http://localhost:3009/products/findAProduct/:id
export const getProduct = (id) => {
  const url = `${SERVER_URL}/products/findAProduct/${id}`;
  return axios.get(url);
};

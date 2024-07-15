import axios from "axios";

const SERVER_URL = "http://localhost:3009";

// @desc GET All Products
// @route GET http://localhost:3009/products/findProducts
export const getAllProducts = () => {
  const url = `${SERVER_URL}/products/findProducts`;
  return axios.get(url);
};

// @desc GET Product With Product ID
// @route GET http://localhost:3009/products/findAProduct/:id
export const getProduct = (id) => {
  const url = `${SERVER_URL}/products/findAProduct/${id}`;
  return axios.get(url);
};

// @desc POST Product
// @route POST http://localhost:3009/card/addToCart/
export const addToCart = (body) => {
  const url = `${SERVER_URL}/cart/addToCart`;
  return axios.post(url, body);
};
// @desc DELETE Product
// @route DELETE http://localhost:3009/cart/removeDataFromCart/:id
export const removeDataFromCart = (productId) => {
  const url = `${SERVER_URL}/cart/removeDataFromCart/:${productId}`;
  return axios.delete(url);
};

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

// @desc POST addToCart
// @route POST http://localhost:3009/card/addToCart/
export const addToCart = (body) => {
  const url = `${SERVER_URL}/cart/addToCart`;
  return axios.post(url, body);
};
// @desc DELETE dataFromCart
// @route DELETE http://localhost:3009/cart/removeDataFromCart/:id
export const removeDataFromCart = (productId) => {
  const url = `${SERVER_URL}/cart/removeDataFromCart/:${productId}`;
  return axios.delete(url);
};

// @desc SignUp User
// @route SignUp http://localhost:3009/users/signup
export const SignUpUser = (body) => {
  const url = `${SERVER_URL}/users/signup`;
  return axios.post(url, body);
};
// @desc SignIn User
// @route SignIn http://localhost:3009/users/signin
export const SignInUser = (body) => {
  const url = `${SERVER_URL}/users/signin`;
  return axios.post(url, body);
};
// @desc GET A User
// @route GET A User http://localhost:3009/users/findAUser/:id
export const findAUser = (userId) => {
  const url = `${SERVER_URL}/users/findAUser/${userId}`;
  return axios.get(url);
};

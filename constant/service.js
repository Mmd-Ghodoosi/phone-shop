import axios from "axios";
import Cookie from 'js-cookie'

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
// @desc UPDATE A User
// @route UPDATE A User http://localhost:3009/users/editUser/:id
export const EditUser = (body, userId) => {
  const url = `${SERVER_URL}/users/editUser/${userId}`;
  return axios.put(url, body);
};


// @desc POST addToCart
// @route POST http://localhost:3009/card/addToCart/
export const addToCart = (body) => {
  const url = `${SERVER_URL}/cart/addToCart`;
  return axios.post(url, body);
};

// @desc GET Cart
// @route GET Cart http://localhost:3009/cart/findCartData?email
export const GetCart = () => {
  const url = `${SERVER_URL}/cart/findCartData?email=${Cookie.get("email")}`;
  return axios.get(url);
};
// @desc DELETE Data From Cart
// @route DELETE Cart http://localhost:3009/cart/removeDataFromCart/:id
export const DeleteDataCart = (id) => {
  const url = `${SERVER_URL}/cart/removeDataFromCart/${id}`;
  return axios.delete(url);
};

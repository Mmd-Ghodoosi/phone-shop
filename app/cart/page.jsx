"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Navbar from "@/components/sections/Navbar";
import { GetCart,DeleteDataCart } from "@/constant/service";

import { Helmet } from "react-helmet-async";
import { FaTimes } from "react-icons/fa";

import Cookie from "js-cookie";

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Cookie.get("userId")) {
          const { data: cartData } = await GetCart();
          if (cartData != undefined) {
            setCart(cartData);
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  // color section
  const colors = {
    BlueColor: "bg-blue-400 w-5 h-5 rounded-lg",

    RedColor: "bg-red-400 w-5 h-5 rounded-lg",
  };

  const removeProductFromCart=async(id)=>{
const response=await DeleteDataCart(id);
if(response){
  const { data: cartData } = await GetCart();
setCart(cartData)
}
  }
  return (
    <>
      <Helmet>
        <title>سبد خرید</title>
      </Helmet>
      <Navbar />
      <div className="relative flex justify-center items-center min-h-screen ">
        <table className="w-full text-sm   text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3"> قیمت</th>
              <th className="px-4 py-3">تصویر محصول</th>
              <th className="px-4 py-3">رنگ</th>
              <th className="px-4 py-3">نام محصول</th>
              <th className=""></th>
            </tr>
          </thead>
          {cart.map((c) => (
            <tbody key={c._id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {c.price}
                  <p>تومان</p>
                </th>
                <td className="px-4 py-4  flex justify-center">
                  <Image
                    src={require(`../../assets/iphone/${c.picture}`)}
                    alt={c.name}
                    className="w-12 h-12 "
                  />
                </td>
                <th className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap   ">
                  <div className="flex justify-center">
                    {c.colors === 1 ? (
                      <div className={colors.BlueColor}></div>
                    ) : (
                      <div className={colors.RedColor}></div>
                    )}
                  </div>
                </th>
                <th className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="  whitespace-nowrap font-medium rounded-lg flex justify-center ">
                    {c.name}
                  </div>
                </th>
                <th className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className=" whitespace-nowrap font-medium rounded-lg flex justify-center ">
                    <FaTimes className="cursor-pointer" onClick={()=>removeProductFromCart(c._id)}/>
                  </div>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Cart;

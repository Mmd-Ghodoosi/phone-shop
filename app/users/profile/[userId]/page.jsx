"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "@/components/sections/Navbar";
import { findAUser } from "@/constant/service";

import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const page = () => {
  const router=useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (Cookies.get("userId")) {
          const { data } = await findAUser(Cookies.get("userId"));
          setUser(data);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.log(error)
        toast.error("مشکلی پیش امده");
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Helmet>
        <title>پروفایل</title>
      </Helmet>
      <Navbar />
      <div className="relative overflow-x-auto flex justify-center items-center min-h-screen px-36  ">
        <table className="w-full text-sm text-right  text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">پسوورد</th>
              <th className="px-6 py-3">ایمیل</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                <Link
                  href={`users/resetPassword/${user.id}`}
                  target="_blank"
                  className="text-gray-900 bg-red-500 px-4 py-2 whitespace-nowrap dark:text-white   hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm text-center"
                >
                  {" "}
                  تغییر رمز عبور
                </Link>
              </td>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;

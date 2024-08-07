"use client";
import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

import { EditUser } from "@/constant/service";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

const ResetPassword = ({ params }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
 

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (Cookies.get("userId")) {
      const { status } = await EditUser({ password }, params.userId);
      if (status === 200) {
        console.log("ok");
        router.push(`/users/profile/${params.userId}`);
      }
    }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش امده");
    }
  };

  return (
    <>
          <Helmet>
        <title>تغییر رمز عبور</title>
      </Helmet>
    <section
      className="bg-gray-50 dark:bg-gray-900 w-full  min-h-screen "
      style={{ direction: "rtl" }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              تغییر رمز عبور
            </h1>

            <form
              className="space-y-4 md:space-y-6 text-right"
              onSubmit={submitForm}
            >
              {/* password section */}

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  رمز عبور جدید را وارد کنید
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full h-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800  "
              >
                تایید
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ResetPassword;

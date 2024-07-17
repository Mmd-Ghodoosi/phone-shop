"use client";
import {  useState } from "react";
import { useRouter } from "next/navigation";

import { SignInUser } from "./../../../constant/service";

import { Helmet } from "react-helmet-async";

import Cookies from "js-cookie";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter();

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const { status } = await SignInUser({ email, password });
      if (status === 201) {
        Cookies.set("session", process.env.NEXT_PUBLIC_TOKEN);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title> ورود</title>
      </Helmet>
      <section
        className="bg-gray-50 dark:bg-gray-900 w-full  min-h-screen "
        style={{ direction: "rtl" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                ورود
              </h1>
              <form
                onSubmit={SignUp}
                className="space-y-4 md:space-y-6 text-right"
                action="/auth/signup"
              >
                <div>
                  {/* email section */}
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    ایمیل وارد کنید
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  {/* password section */}
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    رمز وارد کنید
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800  "
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;

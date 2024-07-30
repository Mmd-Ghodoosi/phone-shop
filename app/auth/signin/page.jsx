"use client";
import { useRouter } from "next/navigation";

import { SignInUser } from "./../../../constant/service";

import { Helmet } from "react-helmet-async";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { userSigninSchema } from "@/components/validation/userValidation";

import Cookies from "js-cookie";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();

  const SignIn = async (values) => {
    try {
      const { status, data } = await SignInUser(values);
      if (status === 201) {
        const expirationInSeconds = 86400; //24 hours
        const expirationDate = new Date(
          new Date().getTime() + expirationInSeconds * 1000
        );
        Cookies.set("session", process.env.NEXT_PUBLIC_TOKEN, {
          expires: expirationDate,
        });
        Cookies.set("userId", data.id, {
          expires: expirationDate,
        });

        router.push("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
              <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                validationSchema={userSigninSchema}
                onSubmit={(values) => {
                  SignIn(values);
                }}
              >
                <Form className="space-y-4 md:space-y-6 text-right">
                  <div>
                    {/* email section */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      ایمیل وارد کنید
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <div
                          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <span className="block sm:inline">{msg}</span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    {/* password section */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      رمز عبور وارد کنید
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => (
                        <div
                          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <span className="block sm:inline">{msg}</span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>
                      )}
                    />
                  </div>
                  <div>
                    {/*repeating password section */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      تکرار رمز عبور
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      render={(msg) => (
                        <div
                          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <span className="block sm:inline">{msg}</span>
                          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>
                      )}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800  "
                  >
                    ورود
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;

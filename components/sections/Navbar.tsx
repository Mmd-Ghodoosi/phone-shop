"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { findAUser } from "@/constant/service";
import { toast } from "react-toastify";

const Navbar = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>("");
  const [token, setToken] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (Cookies.get("userId")) {
          const { data } = await findAUser(Cookies.get("userId"));
          setUser(data);
        }
      } catch (error) {
        toast.error("مشکلی پیش امده");
      }
    };
    fetchUser();
    const session = Cookies.get("session");
    session ? setToken(session) : null;
  }, []);

  const handleLogout = () => {
    router.push("/");
      Cookies.remove("session");
      Cookies.remove("userId");
      window.location.reload();
  };

  return (
    <section className="flex justify-between items-center bg-gray-400 w-full h-12">
      {/* logo section */}
      <div className="pl-2 text-xl">
        <Link href="/" className="text-black ">
          <FaPhoneAlt />{" "}
        </Link>
      </div>
      {/* search section */}
      <div className="flex mt-2 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="جستوجو"
          className="border-b border-b-black bg-gray-400 placeholder-black text-right mr-2 caret-slate-700 focus:outline-none"
        />
        <FaSearch className="cursor-pointer" />
      </div>
      {/* dropdown section */}
      {token === process.env.NEXT_PUBLIC_TOKEN ? (
        <div className="pr-2">
          <button
            className=" flex items-center"
            onClick={() => setMenu((prev) => !prev)}
          >
            {menu ? (
              <MdOutlineKeyboardDoubleArrowUp />
            ) : (
              <MdOutlineKeyboardDoubleArrowDown />
            )}
            <CgProfile className="text-4xl cursor-pointer" />
            {/* menu section */}
            {menu ? (
              <div className="z-10  bg-white divide-y text-center divide-gray-100 rounded-lg shadow w-30 h-36 absolute top-14 right-0  dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {/* profile link inside dropdown */}
                  <li>
                    <a
                      href={`/users/profile/${user.id}`}
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      پروفایل
                    </a>
                  </li>
                  {/* cart link inside dropdown*/}
                  <li>
                    <a
                      href="/cart"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      سبد خرید
                    </a>
                  </li>
                </ul>
                {/* logout button */}
                <div className="py-2">
                  <div
                    className="block px-4 py-2 text-sm cursor-pointer text-red-700 hover:bg-red-100 dark:hover:bg-red-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={handleLogout}
                  >
                    خروج
                  </div>
                </div>
              </div>
            ) : null}
          </button>
        </div>
      ) : (
        <div>
          {/* signup && signin section */}
          <Link
            href={"/auth/signup"}
            className="text-gray-800 hover:text-blue-200"
          >
            ثبت نام
          </Link>
          {"     "}/ {"     "}
          <Link
            href={"/auth/signin"}
            className="text-gray-800 hover:text-blue-200"
          >
            {" "}
            ورود
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;

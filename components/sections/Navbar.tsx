import React from "react";
import Link from "next/link";

import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center bg-gray-400 w-full h-12">
      <div className="pl-2 text-xl">
        <Link href="/" className="text-black ">
          <FaPhoneAlt />{" "}
        </Link>
      </div>
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
      <div className="pr-2   ">
        <Link href={`/profile/id`}>
          <CgProfile className="text-4xl" />
        </Link>
      </div>
    </section>
  );
};

export default Navbar;

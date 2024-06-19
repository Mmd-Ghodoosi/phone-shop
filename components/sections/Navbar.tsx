import React from "react";
import Link from "next/link";

import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center bg-gray-400 w-full h-12">
      <div className="pl-2 text-xl">
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <FaPhoneAlt />{" "}
        </Link>
      </div>
      <div className="flex mt-2 ">
        <input
          type="text"
          name=""
          id=""
          className="border-b border-b-black bg-gray-400   focus:outline-none"
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

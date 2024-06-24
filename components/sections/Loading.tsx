import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <>
      <Image
        src={require("../../assets/Spinner.gif")}
        alt=""
        className=" mx-auto mt-64 flex justify-center items-center w-20 h-20 "
      />
    </>
  );
};

export default Loading;

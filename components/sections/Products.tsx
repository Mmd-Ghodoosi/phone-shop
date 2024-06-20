"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getAllProducts } from "../../constant/service";

import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: productsData } = await getAllProducts();

      setProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <fieldset className="mt-80 text-center border-t-2 border-t-black">
      <legend>محصولات فروشگاه</legend>

      <section className=" grid grid-cols-1 gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        {products.map((product) => (
          <div className="border-2 border-black rounded-xl ">
            <div className=" flex justify-center items-center mt-12   text-center">
              <Link
                href={`/products/${product._id}`}
                target="_blank"
                className="text-[#4b4747]  hover:scale-105  duration-200"
              >
                <Image
                  src={require(`../../assets/iphone/${product.picture}`)}
                  alt={product.name}
                  className="w-64 h-64 "
                />
              </Link>
            </div>
            <div className="pt-4">
              <Link
                href={`/products/${product._id}`}
                target="_blank"
                className="text-[#4b4747] text-xl hover:text-blue-500 hover:underline"
              >
                {product.name}
              </Link>
            </div>
            <div className="pt-2 font-medium">
              قیمت{"   "}
              {product.price}
              {"   "}تومان
            </div>
          </div>
        ))}
      </section>
    </fieldset>
  );
};

export default Products;

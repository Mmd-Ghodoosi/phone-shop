import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getAllProducts } from "../../constant/service";
import ReactPaginate from "react-paginate";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const productsPerPage = 6;
  const endOffset = itemOffset + productsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / productsPerPage);
  const handlePageClick = (e: { selected: number }) => {
    const newOffset = e.selected * productsPerPage;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productsData } = await getAllProducts();
        if (productsData != undefined) {
          setProducts(productsData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <fieldset className="mt-80 mb-8   text-center border-t-2 border-t-black">
      <legend>محصولات فروشگاه</legend>

      <section className="mt-16 grid grid-cols-1 gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        {currentProducts &&
          currentProducts.map((product) => (
            <div
              className="border-2 border-black rounded-xl "
              key={product._id}
            >
              <div className=" flex justify-center items-center mt-12   text-center">
                <Link
                  href={`/products/${product._id}`}
                  target="_blank"
                  className="  hover:scale-105  duration-200"
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
                  className="text-[#a39f9f] text-xl hover:text-blue-500 hover:underline"
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
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-8"
        pageClassName="block border border-solid border-slate-500 w-10 h-10 flex items-center justify-center rounded-md mr-2 ml-2"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        activeClassName="bg-gray-300"
        pageCount={pageCount}
        previousLabel={<FaArrowLeft />}
        nextLabel={<FaArrowRight />}
        renderOnZeroPageCount={null}
      />
    </fieldset>
  );
};

export default Products;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getProduct } from "@/constant/service";
import { addToCart } from "../../../constant/service";

import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import Loading from "../../../components/sections/Loading";
import Navbar from "@/components/sections/Navbar";

const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(product.colors === 1 ? 1 : 2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: productData } = await getProduct(params.productId);
        if (productData != undefined) {
          setProduct(productData);
          setColor(productData.colors);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const AddToCart = async (values) => {
    try {
      if (Cookies.get("userId")) {
        const { status } = await addToCart(values);
        if (status === 201) {
          toast.success("به سبد خرید اضافه شد ");
        }
      } else {
        toast.error("وارد سایت شوید");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  // color section
  const colors = {
    activeBlueColor:
      "bg-blue-400 w-5 h-5 rounded-lg cursor-pointer border-2 border-blue-800",

    notActiveBlueColor:
      "bg-blue-400 w-5 h-5 rounded-lg cursor-pointer active:border-2 border-blue-800",

    activeRedColor:
      "bg-red-400 w-5 h-5 rounded-lg cursor-pointer  border-2 border-red-800",

    notActiveRedColor:
      "bg-red-400 w-5 h-5 rounded-lg cursor-pointer active:border-2 border-red-800",
  };
  return (
    <>
      <Navbar />
      <Helmet>
        <title>{product.name}</title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <>
          {/* product section */}
          <section className="flex justify-center items-center min-h-screen lg:justify-end ">
            {product.name ? (
              <div
                className="text-center font-medium font-serif text-xl  absolute bottom-2 lg:relative lg:top-14 
            lg:text-right md:text-center    "
              >
                <div id="name"> {product.name} : اسم محصول</div>
                <div id="description">
                  {" "}
                  {product.description} : توضیحات محصول{" "}
                </div>
                <div id="colors">
                  {color == 1 ? <div> رنگ : آبی</div> : <div> رنگ : قرمز</div>}
                </div>
                <div className="flex justify-center space-x-2 lg:justify-end ">
                  {color === 1 ? (
                    <div className={colors.activeBlueColor}></div>
                  ) : (
                    <div
                      className={colors.notActiveBlueColor}
                      onClick={() => setColor(1)}
                    ></div>
                  )}

                  {color === 2 ? (
                    <div className={colors.activeRedColor}></div>
                  ) : (
                    <div
                      className={colors.notActiveRedColor}
                      onClick={() => setColor(2)}
                    ></div>
                  )}
                </div>
              </div>
            ) : null}

            {product.picture ? (
              <Image
                src={require(`../../../assets/iphone/${product.picture}`)}
                alt={product.name}
                id="picture"
                className="w-96 h-80 lg:h-96  mb-32  md:mb-10 sm:mb-10"
              />
            ) : null}
          </section>
          {/* add to cart section */}
          <section className="w-full h-14 bg-slate-400 flex justify-center items-center lg:justify-around lg:flex-row  flex-col-reverse     ">
            <button
              onClick={() => {
                AddToCart({
                  name: product.name,
                  price: product.price,
                  colors: color,
                  description: product.description,
                  picture: product.picture,
                  email: Cookies.get("email"),
                });
              }}
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold h-10 rounded w-full lg:w-48 "
            >
              افزودن به سبد خرید
            </button>

            {product.price ? (
              <div className="font-bold text-xl mr-2 mt-1" id="price">
                قیمت : {product.price}
              </div>
            ) : null}
          </section>
        </>
      )}
    </>
  );
};

export default SingleProduct;

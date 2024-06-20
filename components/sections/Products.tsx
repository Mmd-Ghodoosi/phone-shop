"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import { getAllProducts } from "../../constant/service";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
    //<Grid
    //       xs={12}
    //       sm={6}
    //       md={6}
    //       lg={4}
    //       xl={4}
    //       display={"flex"}
    //       justifyContent={"center"}
    //       alignItems={"center"}
    //       mt={10}
    //       key={product._id}
    //     >
    //       <Card
    //         sx={{
    //           maxWidth: 345,
    //           width: "100%",
    //           height: 350,
    //         }}
    //       >
    //         <CardMedia>
    //
    //         </CardMedia>

    //         <CardContent sx={{ textAlign: "center" }}>
    //           <Typography
    //             variant="h5"
    //             component="div"
    //             textAlign={"right"}
    //             pt={2}
    //           >
    //             <Link
    //               href={`/products/${product._id}`}
    //               target="_blank"
    //               style={{ textDecoration: "none", color: "#4b4747" }}
    //             >
    //               {product.name}
    //             </Link>
    //           </Typography>
    //           <Typography
    //             variant="body2"
    //             textAlign={"left"}
    //             pt={4}
    //             fontWeight={"bold"}
    //           >
    //             قیمت{"   "}
    //             {product.price}
    //             {"   "}تومان
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
  );
};

export default Products;

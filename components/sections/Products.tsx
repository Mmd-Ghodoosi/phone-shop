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
    <fieldset
      style={{
        marginTop: 300,
        textAlign: "center",
        borderRight: "none",
        borderLeft: "none",
        borderBottom: "none",
      }}
    >
      <legend>محصولات فروشگاه</legend>
      <Grid container>
        {products.map((product) => (
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={10}
            key={product._id}
          >
            <Card
              sx={{
                maxWidth: 345,
                width: "100%",
                height: 350,
              }}
            >
              <CardMedia>
                <Link
                  href={`/products/${product._id}`}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#4b4747" }}
                >
                  <Image
                    src={require(`../../assets/iphone/${product.picture}`)}
                    alt={product.name}
                  />
                </Link>
              </CardMedia>

              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  component="div"
                  textAlign={"right"}
                  pt={2}
                >
                  <Link
                    href={`/products/${product._id}`}
                    target="_blank"
                    style={{ textDecoration: "none", color: "#4b4747" }}
                  >
                    {product.name}
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  textAlign={"left"}
                  pt={4}
                  fontWeight={"bold"}
                >
                  قیمت{"   "}
                  {product.price}
                  {"   "}تومان
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid xs={0} sm={0} md={0} lg={0} xl={0}></Grid>
      </Grid>
    </fieldset>
  );
};

export default Products;

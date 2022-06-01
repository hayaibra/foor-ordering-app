import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Price } from "./Style";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import Image from "next/image";

function Card({ product }) {
  return (
    <Grid item lg={3} md={4} xs={10} sm={6} textAlign="center" key={product.id}>
      <Link href={`/products/${product.id}`} passHref>
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            cursor: "pointer",
            height: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <StarIcon sx={{ color: "yellow" }} fontSize="small" />
            <span style={{ fontWeight: "bold" }}>{product.rate}</span>
          </div>
          <div>
            <Image src={product.img} width="150" height="150" alt={product.name} />
          </div>
          <Typography variant="body1" sx={{ fontWeight: "bold" }} gutterBottom>
            {product.name}
          </Typography>
          <Price varient="body2" fontWeight="bold" fontSize="15px" gutterBottom>
            {product.price[2]}
          </Price>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              padding: "0 20px",
              marginTop: "0",
            }}
          >
            {product.desc}
          </p>
        </Paper>
      </Link>
    </Grid>
  );
}

export default Card;

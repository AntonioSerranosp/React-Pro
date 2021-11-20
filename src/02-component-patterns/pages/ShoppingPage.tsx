import React from "react";
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components";
const ImageProduct = "../assets/coffee-mug.png";

const product = {
  id: "1",
  title: "cofe",
  image: ImageProduct,
};

export const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping store</h2>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* Approach key - value  */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Holaa jeje"} />
          <ProductCard.Buttons />
        </ProductCard>
        {/* Approach pues componente */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

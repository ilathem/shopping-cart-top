import { useOutletContext, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../components/product";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return data;
}

export default function Shop() {
  const storeData = useLoaderData();
  const addToCart = useOutletContext();

  return (
    <div>
      <h1 aria-label="page-title">Shop page</h1>
      {storeData &&
        storeData.map((item) => (
          <Product key={item.id} addToCart={addToCart} itemData={item} />
        ))}
    </div>
  );
}

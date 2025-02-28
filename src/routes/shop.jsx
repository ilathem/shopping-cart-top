import { useOutletContext } from "react-router";
import Product from "../components/product";
import { useEffect } from "react";
import { useState } from "react";

export default function Shop() {
  const addToCart = useOutletContext();
  const [storeData, setStoreData] = useState();

  console.log(storeData);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setStoreData(JSON.parse(localStorage.getItem("products")));
    } else {
      getFakestoreData();
    }
  }, []);

  const getFakestoreData = async () => {
    console.log("getting fakestore data");
    fetch(`https://fakestoreapi.com/products`).then((res) =>
      res.json().then((data) => {
        setStoreData(data);
        localStorage.setItem("products", JSON.stringify(data));
      }),
    );
  };

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

import { useOutletContext, useLoaderData } from "react-router-dom";
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
    <div className="flex flex-col h-full">
      <h1 aria-label="page-title">Shop page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 justify-items-center p-2 border-2 border-zinc-600/50 rounded-2xl overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-300/50">
        {storeData &&
          storeData.map((item) => (
            <Product key={item.id} addToCart={addToCart} itemData={item} />
          ))}
      </div>
    </div>
  );
}

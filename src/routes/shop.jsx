import { useOutletContext } from "react-router";
import Product from "../components/product";

export default function Shop() {
  const addToCart = useOutletContext();
  return (
    <div>
      <h1 aria-label="page-title">Shop page</h1>
      <Product addToCart={addToCart} />
    </div>
  );
}

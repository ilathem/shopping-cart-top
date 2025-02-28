import PropTypes from "prop-types";
import { useState } from "react";

export default function Product({
  addToCart,
  itemData = {
    image: "",
    title: "",
    description: "",
    price: 0,
    id: 0,
  },
}) {
  const [quantity, setQuantity] = useState("");

  function adjustQuantity(adjustment) {
    if (adjustment === 1) {
      setQuantity((prevQuantity) => Number(prevQuantity) + 1);
    } else if (adjustment === -1) {
      setQuantity((prevQuantity) => {
        if (prevQuantity <= 1 || prevQuantity === "") return "";
        else return Number(prevQuantity) - 1;
      });
    }
  }

  function handleInputChange(incomingValue) {
    if (incomingValue <= 0) setQuantity("");
    else setQuantity(incomingValue);
  }

  return (
    <div className="text-center border-zinc-700/50 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-700/50 rounded-xl transition-all p-4 flex flex-col border-2 justify-between items-center group">
      <img
        aria-label="product-image"
        src={itemData.image || "https://placehold.co/600x400"}
        className="mb-2 shadow-lg shadow-zinc-400/50 h-40 w-40"
      />
      <h3
        aria-label="product-title"
        className="text-2xl group-hover:text-zinc-300 transition-colors"
      >
        {itemData.title}
      </h3>
      <p
        aria-label="product-description"
        className="text-sm mb-2 group-hover:text-zinc-300 transition-colors"
      >
        {itemData.description}
      </p>
      <p
        aria-label="product-price"
        className="text-lg mb-2 text-lime-700 group-hover:text-lime-500 transition-all"
      >
        Price: {itemData.price}
      </p>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="border-zinc-700/50 hover:border-zinc-700 transition-all rounded-xl pb-2 border-2 flex flex-col w-full">
          <label
            aria-label="quantity-input-label"
            htmlFor={`quantity-input-${itemData.id}`}
            className="text-xl text-center group-hover:text-zinc-300 transition-colors"
          >
            Quantity
          </label>
          <div className="flex flex-row items-center gap-2  justify-center">
            <button
              title="Decrement the quantity"
              aria-label="quantity-decrement"
              className="active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md"
              onClick={() => adjustQuantity(-1)}
            >
              -1
            </button>
            <input
              placeholder="0"
              aria-label="quantity-input"
              id={`quantity-input-${itemData.id}`}
              type="number"
              className="border-zinc-600 hover:border-zinc-500 transition-all border-2 rounded-md w-20 p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="0"
              value={quantity}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              title="Increment the quantity"
              aria-label="quantity-increment"
              className="active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md"
              onClick={() => adjustQuantity(1)}
            >
              +1
            </button>
          </div>
        </div>
        <button
          aria-label="quantity-submit"
          type="submit"
          className="active:scale-95 shadow-md hover:shadow-lg shadow-zinc-500/50 border-2 rounded-xl border-zinc-600 hover:border-zinc-500 transition-all py-2 px-8 mt-4 cursor-pointer hover:text-zinc-300"
          onClick={() => addToCart(quantity)}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}

Product.propTypes = {
  itemData: PropTypes.object,
  addToCart: PropTypes.func,
};

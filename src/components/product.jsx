import PropTypes from "prop-types";

export default function Product({ link }) {
  return (
    <div className="h-min text-center border-zinc-700/50 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-700/50 rounded-xl transition-all p-4 flex flex-col border-2 w-sm items-center">
      <img
        aria-label="product-image"
        src={link || "https://placehold.co/600x400"}
        className="mb-2 shadow-lg shadow-zinc-400/50"
      />
      <h3 aria-label="product-title" className="text-2xl">
        Title
      </h3>
      <p aria-label="product-description" className="text-sm mb-2">
        Description Description Description Description Description Description
        Description
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
            htmlFor="quantity-input"
            className="text-xl text-center"
          >
            Quantity
          </label>
          <div className="flex flex-row items-center gap-2  justify-center">
            <button
              title="Decrement the quantity"
              aria-label="quantity-decrement"
              className="active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md"
            >
              -1
            </button>
            <input
              aria-label="quantity-input"
              id="quantity-input"
              type="number"
              className="border-zinc-600 hover:border-zinc-500 transition-all border-2 rounded-md w-20 p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="0"
            />
            <button
              title="Increment the quantity"
              aria-label="quantity-increment"
              className="active:scale-90 border-2 border-zinc-600 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer select-none transition-all py-1 px-4 rounded-md"
            >
              +1
            </button>
          </div>
        </div>
        <button
          aria-label="quantity-submit"
          type="submit"
          className="active:scale-95 shadow-md hover:shadow-lg shadow-zinc-500/50 border-2 rounded-xl border-zinc-600 hover:border-zinc-500 transition-all py-2 px-8 mt-4 cursor-pointer hover:text-zinc-300"
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}

Product.propTypes = {
  link: PropTypes.string,
};

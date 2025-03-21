import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import { useState } from "react";

export default function Root() {
  const [numCartItems, setNumCartItems] = useState(0);

  function addToCart(incomingVal) {
    setNumCartItems(Number(numCartItems) + Number(incomingVal));
  }

  return (
    <div className="bg-zinc-900 text-zinc-400 h-screen font-[Inter] text-xl flex flex-row">
      <Nav numCartItems={numCartItems} />
      <main className="flex-1 border-2 m-5 ml-0 rounded-2xl p-4 text-center">
        <Outlet context={addToCart} />
      </main>
    </div>
  );
}

import { Outlet } from "react-router";
import Nav from "../components/nav";

export default function Root() {
  return (
    <div className="bg-zinc-900 text-zinc-400 h-screen font-[Inter] text-xl flex flex-row">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
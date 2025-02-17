import { Outlet } from "react-router";
import Nav from "../components/nav";

export default function Root() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
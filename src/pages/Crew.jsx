import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Crew() {
  return (
    <div id="crew" className="">
      <Header />
      <div className="custom-container">
        <h1 className="w-fit mx-auto sm:ml-0 text-preset5 uppercase mb-20 lg:mb-0">
          <span className="opacity-25">01</span> Meet your crew
        </h1>
        <Outlet />
      </div>
    </div>
  );
}

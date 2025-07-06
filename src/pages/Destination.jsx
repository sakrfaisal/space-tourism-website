import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Destination() {
  return (
    <div id="destination" className="min-h-screen">
      <Header />
      <div className="custom-container">
        <h1 className="w-fit mx-auto sm:ml-0 text-preset5 uppercase mb-20">
          <span className="opacity-25">01</span> Pick your destination
        </h1>
        <Outlet />
      </div>
    </div>
  );
}

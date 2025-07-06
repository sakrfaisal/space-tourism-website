import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Destination() {
  return (
    <div id="technology" className="min-h-screen pb-20">
      <Header />
      <div>
        <div className="pt-6 sm:pt-10 lg:pt-12 mx-auto px-6 sm:px-8 lg:px-0 lg:pl-12">
          <h1 className="w-fit mx-auto sm:ml-0 text-preset5 uppercase mb-20">
            <span className="opacity-25">01</span> Space launch 101
          </h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

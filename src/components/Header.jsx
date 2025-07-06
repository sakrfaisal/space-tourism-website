import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import { useEffect } from "react";
import CloseIcon from "../../assets/shared/icon-close.svg";
import HamburgerIcon from "../../assets/shared/icon-hamburger.svg";

export default function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 640) {
        hideNav();
      }
    };
  });

  function showNav() {
    const nav = document.getElementById("navMobile");
    nav.style.left = "calc(100% - 350px)";
  }
  function hideNav() {
    const nav = document.getElementById("navMobile");
    nav.style.left = "100%";
  }

  return (
    <header className="h-24 lg:h-34 border-t-transparent lg:border-t-40 flex justify-between items-center font-barlow-condensed relative">
      <Link to="/" className="mx-6 sm:mx-10 lg:mx-16">
        <img src={Logo} alt="Logo" className="w-10 sm:w-12" />
      </Link>
      <ul
        id="nav"
        className="hidden h-24 sm:flex justify-end grow lg:max-w-184 sm:px-10 lg:px-16 gap-12 bg-[#ffffff0d] backdrop-blur-xl text-white">
        <li className={`${pathname === "/" ? "active" : ""} uppercase flex text-preset8`}>
          <Link to="/" className="flex items-center">
            Home
          </Link>
        </li>
        <li
          className={`${
            pathname.startsWith("/destination") ? "active" : ""
          } uppercase flex text-preset8`}>
          <Link to="/destination" className="flex items-center">
            Destination
          </Link>
        </li>
        <li
          className={`${pathname.startsWith("/crew") ? "active" : ""} uppercase flex text-preset8`}>
          <Link to="/crew" className="flex items-center">
            Crew
          </Link>
        </li>
        <li
          className={`${
            pathname.startsWith("/technology") ? "active" : ""
          } uppercase flex text-preset8`}>
          <Link to="/technology" className="flex items-center">
            Technology
          </Link>
        </li>
      </ul>
      <button className="black sm:hidden cursor-pointer px-6" onClick={showNav}>
        <img src={HamburgerIcon} alt="Menu" width="24" height="21" />
      </button>
      <div
        id="navMobile"
        className="duration-200 fixed left-[100%] right-0 top-0 bottom-0 py-8 pl-8 z-10">
        <button onClick={hideNav} className="mb-40 cursor-pointer ml-">
          <img src={CloseIcon} alt="Close" width="24" height="21" />
        </button>
        <ul className="flex flex-col gap-8 ">
          <li className={`${pathname === "/" ? "active" : ""} uppercase text-preset8`}>
            <Link to="/" className={`flex items-center`}>
              Home
            </Link>
          </li>
          <li
            className={`${
              pathname.startsWith("/destination") ? "active" : ""
            } uppercase text-preset8`}>
            <Link to="/destination" className={`flex items-center`}>
              Destination
            </Link>
          </li>
          <li className={`${pathname.startsWith("/crew") ? "active" : ""} uppercase text-preset8`}>
            <Link to="/crew" className={`flex items-center`}>
              Crew
            </Link>
          </li>
          <li
            className={`${
              pathname.startsWith("/technology") ? "active" : ""
            } uppercase text-preset8`}>
            <Link to="/technology" className={`flex items-center`}>
              Technology
            </Link>
          </li>
        </ul>
        HamburgerIcon
      </div>
    </header>
  );
}

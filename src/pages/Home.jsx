import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <div className="custom-container flex items-center">
        <div className="gap-30 sm:gap-16.5 lg:gap-7.5 mx-auto flex flex-col lg:flex-row items-center lg:mt-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="uppercase text-preset5 text-custom-blue-300">So, you want to travel to</p>
            <span className="block uppercase text-preset2 sm:text-preset1">Space</span>
            <p className="text-preset9 text-custom-blue-300">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </p>
          </div>
          <div className="lg:w-1/2">
            <Link
              to="/destination"
              className="ml-auto flex items-center justify-center bg-white text-custom-blue-900 rounded-full flex-none text-preset4 w-36 h-36 sm:w-68 sm:h-68 cursor-pointer">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

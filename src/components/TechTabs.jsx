import { Link } from "react-router-dom";

export default function TechTabs({ technologies, active }) {
  const tabs = technologies.map((tech, index) => {
    return (
      <li
        key={tech.name.replace(" ", "-").toLowerCase()}
        className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border-1 border-[#ffffff40] ${
          active === tech.name.replace(" ", "-").toLowerCase() ? "active" : ""
        }`}>
        <Link
          to={`../${tech.name.replace(" ", "-").toLowerCase()}`}
          className="flex items-center justify-center w-full h-full rounded-full text-preset4 uppercase border-b-2 border-transparent">
          {index + 1}
        </Link>
      </li>
    );
  });
  console.log(technologies[0].name.replace(" ", "-").toLowerCase());
  return (
    <ul id="techTabs" className="flex lg:flex-col gap-4 lg:justify-center">
      {tabs}
    </ul>
  );
}

import { Link } from "react-router-dom";

export default function Tabs({ destinations, active }) {
  const tabs = destinations;
  const eleTabs = tabs.map((tab) => (
    <li key={tab.name}>
      <Link
        to={`../${tab.name.toLowerCase()}`}
        className={`text-preset8 uppercase text-custom-blue-300 pb-2 border-b-2 border-transparent ${
          active === tab.name.toLowerCase() ? "active" : ""
        }`}>
        {tab.name}
      </Link>
    </li>
  ));
  return <ul className="flex gap-8 h-8">{eleTabs}</ul>;
}

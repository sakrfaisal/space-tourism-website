import { Link } from "react-router-dom";

export default function Pagination({ crew, active }) {
  const dots = crew.map((member) => {
    return (
      <li
        key={member.name.split(" ")[1].toLowerCase()}
        className={`${
          member.name.split(" ")[1].toLowerCase() === active ? "active" : ""
        } w-2.5 h-2.5 rounded-full lg:w-3.75 lg:h-3.75 cursor-pointer relative`}>
        <Link
          to={`../${member.name.split(" ")[1].toLowerCase()}`}
          className="absolute top-0 bottom-0 left-0 right-0"></Link>
      </li>
    );
  });
  return (
    <ul
      id="pagination"
      className="flex justify-center lg:justify-start gap-4 lg:gap-10 mb-6 lg:mb-0 mt-6 lg:mt-auto lg:absolute left-0 bottom-0">
      {dots}
    </ul>
  );
}

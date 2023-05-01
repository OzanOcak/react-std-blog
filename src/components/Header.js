import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({ search, setSearch }) => {
  return (
    <header className="flex  flex-col md:flex-row gap-2 justify-between w-full h-[8rem] md:h-[4rem]  lg:h-[6rem] items-start my-6 ml-4 md:ml-0">
      <h1 className="flex justify-center font-extrabold text-2xl">
        My <span className="text-red-400">D</span>ic
        <span className="text-green-400">t</span>i
        <span className="text-blue-400">o</span>nary
      </h1>
      <Search search={search} setSearch={setSearch} className="" />
      <nav className="">
        <ul className="flex gap-2 ">
          <li>
            <Link to="/">Words</Link>
          </li>
          <li>
            <Link to="/post">Add</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

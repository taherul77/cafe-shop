import { Link } from "react-router-dom";
import logo from "../../assets/icons/star.png";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="navbar py-5 lg:px-20 pe-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li>
                  <a className="text-black">Home</a>
                </li>
              </Link>
              <Link to="/our-shop">
                <li>
                  <a className="text-black">Our Shop</a>
                </li>
              </Link>
             
              <li>
                <a className="text-black">Blog</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex gap-2">
              <img src={logo} alt="" className="h-8" />
              <a className="lg:text-2xl text-lg text-black">S T R A D A L A</a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a className="text-black">Home</a>
              </li>
            </Link>
            <Link to="/our-shop">
              <li>
                <a className="text-black">Our Shop</a>
              </li>
            </Link>
           
            <li>
              <a className="text-black">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className=" text-white text-md font-bold bg-[#CA8E46] px-6 py-1 uppercase">
            login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

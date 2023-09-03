import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/icons/star.png";
import { useAuth } from "../../context/AuthProvider";
import GetCart from "../../helper/getCart";



const Header = () => {
  const { currentUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const data  = GetCart();
  const cartQuantity = data?.data?.length;
  


  const menus = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Shop", link: "/our-shop" },
    { name: "Blog", link: "/blogs" },
];
  return (
    <div className="shadow-lg w-full fixed bg-black/40 top-0 z-10">
    <div className="grid grid-cols-12 lg:flex justify-between items-center py-4 lg:px-14 px-7">
        {/* mobile menus icon  */}
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl col-span-3 left-8 cursor-pointer lg:hidden"
        >
            {isOpen ? (
                <CgClose className="text-primary" />
            ) : (
                <VscThreeBars className="text-primary" />
            )}
        </div>

        {/* logo  */}
        <Link
            className="col-span-6 lg:col-span-3 flex justify-center lg:justify-start"
            to={"/"}
        >
            <div className="flex gap-5  items-center">
          <img src={logo} alt="" className="h-16"/>
          <a className="lg:text-2xl text-lg text-white">S T R A D A L A</a>
          </div>
        </Link>

        {/* mobile menu cart and user  */}
        <div className="col-span-3 flex items-center justify-end">
            <Link
                to={"/cart"}
                className="relative mr-2 text-white lg:hidden"
            >
                <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                    {cartQuantity ?? 0}
                </small>
                <AiOutlineShoppingCart className="text-2xl font-medium" />
            </Link>
            {currentUser ? (
                <div className="lg:hidden dropdown dropdown-hover dropdown-end">
                    <label
                        tabIndex={0}
                        className="rounded-full p-[2px] border-2 border-primary avatar cursor-pointer"
                    >
                        <div className="w-6 md:w-8 rounded-full">
                            {currentUser?.photo && (
                                <img alt="" src={currentUser?.photo} />
                            )}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content p-2 shadow-md bg-white font-medium text-neutral rounded-md min-w-max"
                    >
                        <li className="cursor-default">
                            <p className="cursor-default hover:bg-white text-primary">
                                {currentUser?.name}
                            </p>
                        </li>
                        {currentUser?.role === "admin" ? (
                            <li>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                        ) : (
                           <></>
                        )}
                        <li>
                            <Link
                                onClick={() => logout()}
                                className="hover:bg-red-500 hover:text-white text-red-500"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="md:hidden">
                    <Link to={"/login"}>
                        <button className={"bg-primary text-white"}>
                            Log In
                        </button>
                    </Link>
                </div>
            )}
        </div>

        <ul
            className={`w-full text-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 lg:w-auto transition-all duration-500 ease-in ${
                isOpen ? "top-20 " : "top-[-490px]"
            } ${
                isOpen &&
                "h-screen flex bg-black/70 items-center justify-center mt-[-5rem]"
            }`}
        >
            <div className="lg:flex lg:items-center space-y-7 lg:space-y-0 lg:space-x-5">
                {menus.map((menu, index) => (
                    <li key={index} className="text-xl lg:my-0 my-7">
                        <NavLink
                            to={menu.link}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary uppercase font-bold"
                                    : "hover:text-primary uppercase text-white font-bold duration-500"
                            }
                        >
                            {menu.name}
                        </NavLink>
                    </li>
                ))}
                <Link to={"/cart"} className="relative hidden lg:block">
                    <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                        {cartQuantity ?? 0}
                    </small>
                    <AiOutlineShoppingCart className="text-2xl font-medium text-white" />
                </Link>
                {currentUser ? (
                    <div className="hidden lg:block dropdown dropdown-hover dropdown-end">
                        <label
                            tabIndex={0}
                            className="rounded-full p-[2px] border-2 border-primary avatar ml-2 cursor-pointer"
                        >
                            <div className="w-6 md:w-8 rounded-full">
                                {currentUser?.photo && (
                                    <img
                                        alt=""
                                        src={currentUser?.photo}
                                    />
                                )}
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content p-2 shadow-md bg-white font-medium text-neutral rounded-md min-w-max"
                        >
                            <li className="cursor-default">
                                <p className="cursor-default text-primary hover:text-primary hover:bg-white">
                                    {currentUser?.name}
                                </p>
                            </li>
                            {currentUser?.role === "admin" ? (
                                <li>
                                    <Link to={"/dashboard"}>
                                        Dashboard
                                    </Link>
                                </li>
                            ) : (
                                <></>
                            )}
                            <li>
                                <Link
                                    onClick={() => logout()}
                                    className="hover:bg-red-500 hover:text-white text-red-500"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <Link to={"/login"}>
                        <svg
                    className="h-9 lg:h-10 p-2 text-white"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                  </svg>
                        </Link>
                    </div>
                )}
            </div>
        </ul>
    </div>
</div>
  );
};

export default Header;

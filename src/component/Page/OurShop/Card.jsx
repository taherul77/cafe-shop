import { useRef, useState } from "react";
import "./card.css";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const delayedIsHovered = useRef(false);
  const timeoutId = useRef(null);

  const handleMouseOver = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setIsHovered(true);
      delayedIsHovered.current = true;
    }, 200);
  };

  const handleMouseOut = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setIsHovered(false);
      delayedIsHovered.current = false;
    }, 200);
  };

  return (
    <div>
      <div className={`col-span-12 lg:col-span-3 `}>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="hover:shadow-md rounded-md cursor-pointer"
        >
          <div data-aos="flip-right">
            <img
              className="border object-cover border-b-0 border-gray-400"
              src=""
              alt=""
            />
          </div>
          <div className=" sm:mb-5 lg:mb-0 lg:text-center pt-5 pb-12 space-y-3 border border-gray-200 relative">
            <h2 className="text-2xl uppercase font-medium">hiiii</h2>
            <h3 className="text-xl uppercase font-medium">Instructor:</h3>
            <h2 className="text-lg font-medium">$</h2>
            <h2>Available seats :33 </h2>
            <div className="button-cart"></div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-12 h-12 absolute p-4 rounded-full bottom-[-20px] text-white bg-[#60cdd3] left-1/2 transform -translate-x-1/2 `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

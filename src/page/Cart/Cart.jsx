import { Link } from "react-router-dom";

import GetCart from "../../helper/getCart";
import calculateTotal from "../../helper/totalPrice";
import CartItem from "../../component/Page/OurShop/cart/CartItem";
import ShopBanner from "../../component/Page/OurShop/ShopBanner";
import image from "../../assets/image/banner.png";

const Cart = () => {
  const { data, refetch } = GetCart();
  const { subtotal, shipping, total } = calculateTotal(data);
  console.log(data);

  return (
    <div className="bg-white">
         <ShopBanner img={image} heading={"My Cart"}></ShopBanner>
      <section className="h-auto ">
        <div className="mx-auto   px-4 sm:px-6 lg:px-8">
          {!data || data?.length === 0 ? (
            <div className="h-[calc(100vh-10rem)]  m-28 flex justify-center items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-center text-black leading-10 uppercase">
                  No Product available
                </h1>
                <Link
                  href={"/shop"}
                  className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
                >
                  <button
                    className={
                      "flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800"
                    }
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white border rounded-md shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="">
                    <ul className="-my-8">
                      {data?.map((item, index) => (
                        <CartItem
                          key={index}
                          item={item}
                          refetch={refetch}
                        ></CartItem>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">Subtotal</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${subtotal}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">Shipping</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${shipping}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      <span className="text-xs font-normal text-gray-400">
                        USD
                      </span>{" "}
                      {total}
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <Link to="/checkout">
                      <button
                        type="button"
                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-yellow-800"
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;

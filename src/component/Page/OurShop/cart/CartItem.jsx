/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-hot-toast";


const CartItem = ({ item, refetch }) => {
   
  const { image, discount_price
      , name,description } = item.data;

      const [quantity, setQuantity] = useState(item?.quantity ?? 1);

      const [totalPrice, setTotalPrice] = useState(quantity * discount_price
          );
      const handleAddToCart = (item) => {
          setQuantity(quantity + 1);
          setTotalPrice((quantity + 1) * discount_price
          );
          const cart = localStorage.getItem("cart");
          const cartItems = JSON.parse(cart);
  
          const updatedCartItems = cartItems.map((cartItem) => {
              if (cartItem.data._id === item.data._id) {
                  return {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                  };
              }
              return cartItem;
          });
  
          localStorage.setItem("cart", JSON.stringify(updatedCartItems));
          refetch();
      };
  
      const handleDecreaseCart = () => {
          setQuantity(quantity - 1);
          setTotalPrice((quantity - 1) * discount_price
          );
          const cart = localStorage.getItem("cart");
          const cartItems = JSON.parse(cart);
  
          const updatedCartItems = cartItems.map((cartItem) => {
              if (cartItem.data._id === item.data._id) {
                  return {
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                  };
              }
              return cartItem;
          });
  
          localStorage.setItem("cart", JSON.stringify(updatedCartItems));
          refetch();
      };

  const handleRemove = (item) => {
      const data = JSON.parse(localStorage.getItem("cart"));
      const deleteItem = item.data._id;

      const updatedData = data.filter((item) => item.data._id !== deleteItem);
      localStorage.setItem("cart", JSON.stringify(updatedData));
      refetch();
      toast.success("Successfully Remove")
  };

return (
  <div>
    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0">
        <img
          height={500}
          width={500}
          className=" w-24 max-w-full rounded-lg object-cover"
          src={image}
          alt=""
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">
              {name}
            </p>
            <p className="mx-0 mt-1 mb-0 text-sm line-clamp-2 text-gray-400">{description}</p>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
            ${totalPrice?.toFixed(2)}

            </p>

            <div className="sm:order-1">
              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                <button
                disabled={quantity < 2}
                onClick={() => handleDecreaseCart(item)}
                
                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                {quantity}
                </div>
                <button 
                onClick={() => handleAddToCart(item)}
                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
           onClick={() => {
              handleRemove(item), refetch();
          }}
            type="button"
            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" className=""></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  </div>
);
};

export default CartItem;
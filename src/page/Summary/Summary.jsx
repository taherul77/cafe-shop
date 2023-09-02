import axios from "axios";

import { useEffect, useState } from "react";
import { BASE_URL } from "../../component/hook/url";
import { FaUsers, FaShoppingBasket } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

const Summary = () => {
    const [totalOrder, setTotalOrder] = useState(0);
    const [totalCustomer, setTotalCustomer] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/order/data/total`).then(function (response) {
            setTotalOrder(response?.data?.total);
        });
        axios.get(`${BASE_URL}/user/data/total`).then(function (response) {
            setTotalCustomer(response?.data?.total);
        });
        axios.get(`${BASE_URL}/menu/data/total`).then(function (response) {
            setTotalProduct(response?.data?.total);
        });
    }, []);

    return (
        <div className="">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-black">
          Welcome to Dashboard
        </h2>
      </div>

      <p className="flex text-2xl md:text-3xl mt-5 text-gray-600 uppercase font-medium leading-10 text-center justify-center md:text-left">
        Summary
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="mt-2 w-full ">
          <div className="relative flex flex-col bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-1">
                  <h5 className="text-black uppercase font-bold text-xl">
                    TOTAL CUSTOMER
                  </h5>
                  <span className="font-semibold text-6xl text-gray-500">
                    {totalCustomer}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-1 text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full  bg-blue-500">
                    <FaUsers className="text-4xl"></FaUsers>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-2 w-full ">
          <div className="relative flex flex-col bg-white rounded mb-4 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-black uppercase font-bold text-xl">
                    TOTAL ORDER
                  </h5>
                  <span className="font-semibold text-6xl text-gray-500">
                    {totalOrder}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-1 text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full  bg-pink-500">
                    <FaShoppingBasket className="text-4xl"></FaShoppingBasket>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 w-full ">
          <div className="relative flex flex-col bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-black uppercase font-bold text-xl">
                    Total Product
                  </h5>
                  <span className="font-semibold text-6xl text-gray-500">
                    {totalProduct}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-1 text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full  bg-green-500">
                    <MdProductionQuantityLimits className="text-4xl"></MdProductionQuantityLimits>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Summary;

import axios from "axios";

import { useEffect, useState } from "react";
import { BASE_URL } from "../../component/hook/url";

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
        <div>
            <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center md:text-left">
                Summary
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
                    <h2 className="text-6xl font-bold">{totalCustomer}</h2>
                    <p className="text-sm lg:text-xl font-medium mt-2">
                        TOTAL CUSTOMER
                    </p>
                </div>
                <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
                    <h2 className="text-6xl font-bold">{totalOrder}</h2>
                    <p className="text-sm lg:text-xl font-medium mt-2">
                        TOTAL ORDER
                    </p>
                </div>
                <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
                    <h2 className="text-6xl font-bold">{totalProduct}</h2>
                    <p className="text-sm lg:text-xl font-medium mt-2">
                        TOTAL PRODUCTS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Summary;

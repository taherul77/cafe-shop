import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL } from "../../component/hook/url";

const Orders = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/order/`).then(function (response) {
            setData(response?.data);
        });
    }, []);

return (
    <div>
    <p className="flex text-2xl md:text-3xl mt-5 text-gray-600 uppercase font-medium leading-10 text-center justify-center md:text-left">
     Orders
   </p>
 <section className="py-3 sm:py-5">
   <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
     <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
       <div className="flex flex-col px-4 py-3  space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
         <div className="flex items-center flex-1 space-x-4">
           <h5>
             <span className="text-black">All Orders : </span>
             <span className="text-black">{data?.length}</span>
           </h5>
         </div>
       </div>
       <div className="overflow-x-auto">
         <table className="w-full text-sm text-left text-gray-500 ">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
             <tr>
               <th scope="col" className="px-4 py-3">
                 TranId
               </th>
               <th scope="col" className="px-4 py-3">
                 Product Name
               </th>
               <th scope="col" className="px-4 py-3">
                 Price
               </th>
               <th scope="col" className="px-4 py-3">
                 Customer Name
               </th>
               <th scope="col" className="px-4 py-3">
                 Phone
               </th>
               <th scope="col" className="px-4 py-3">
                 Payment Status
               </th>
               <th scope="col" className="px-4 py-3">
                 Create Time
               </th>
             </tr>
           </thead>
           <tbody>
             {data?.map((order, index) => (
               <tr key={index} className="border-b ">
                 <th
                   scope="row"
                   className="flex items-center px-4 py-2 font-medium text-black whitespace-nowrap "
                 >
                   {order?.tranId}
                 </th>
                 <td className="px-4 py-2">
                   <span className="bg-primary-100 text-black line-clamp-1 text-xs font-medium px-2 py-0.5 rounded ">
                     {order?.data?.name}
                   </span>
                 </td>
                 <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                   <div className="flex items-center">
                     <div className="inline-block  rounded-full"></div>
                     {order?.data?.price}
                   </div>
                 </td>
                 <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                   {order?.name}
                 </td>
                 <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                   {order?.phone}
                 </td>
               
                 <td className="flex items-center justify-center px-4 py-2 font-medium text-black whitespace-nowrap ">
                   Paid
                 </td>
                 <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                   {order?.createdAt.slice(0,10)}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 </section>
 </div>
);
};

export default Orders;

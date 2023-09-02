
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../../component/hook/url";

const Customers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/user/`).then(function (response) {
            setData(response?.data);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const data = {
            name,
            phone,
            password,
        };
        setIsLoading(true);
        fetch(`${BASE_URL}/user/create-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsLoading(false);
                if (data?.success) {
                    form.reset();
                    setError("");
                    Swal.fire({
                        icon: "success",
                        title: `${data?.message}`,
                        confirmButtonText: "OKAY",
                        customClass: {
                            confirmButton: "my-custom-button-class",
                        },
                    });
                    setShowModal(false);
                    window.location.reload();
                } else {
                    setError(data?.message);
                    toast.error(data?.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
    };

    return (
        <div>
        <p className="flex text-2xl md:text-3xl mt-5 text-gray-600 uppercase font-medium leading-10 text-center justify-center md:text-left">
         Customers
       </p>
     <section className="py-3 sm:py-5">
       <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
         <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
           <div className="flex flex-col px-4 py-3  space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
             <div className="flex items-center flex-1 space-x-4">
               <h5>
                 <span className="text-black">All Customers : </span>
                 <span className="text-black">{data?.length}</span>
               </h5>
             </div>
             <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
               <button
               onClick={() => setShowModal(true)}
                 type="button"
                 className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 "
               >
                 <svg
                   className="h-3.5 w-3.5 mr-2"
                   fill="currentColor"
                  
                   xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true"
                 >
                   <path
                    
                     d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                   />
                 </svg>
                 Add new product
               </button>
             </div>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                 <tr>
                   
                   <th scope="col" className="px-4 py-3">
                     SL N0
                   </th>
                   <th scope="col" className="px-4 py-3">
                     Name
                   </th>
                   <th scope="col" className="px-4 py-3">
                     Phone
                   </th>
                   <th scope="col" className="px-4 py-3">
                     Role
                   </th>
                   <th scope="col" className="px-4 py-3">
                     Create Time
                   </th>
                 </tr>
               </thead>
               <tbody>
                 {data.map((user, index) => (
                   <tr key={index} className="border-b ">
                     
                     <th
                       scope="row"
                       className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap "
                     >
                       {index + 1}
                     </th>
                     <td className="px-4 py-2">
                       <span className="bg-primary-100 text-black text-xs font-medium px-2 py-0.5 rounded ">
                         {user?.name}
                       </span>
                     </td>
                     <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                       <div className="flex items-center">
                         <div className="inline-block  rounded-full"></div>
                         {user?.phone}
                       </div>
                     </td>
                     <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                       {user?.role}
                     </td>
                     <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                       {user?.updatedAt}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           {showModal ? (
                 <>
                     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                         <div className="relative w-auto my-6 mx-auto max-w-3xl">
                             {/*content*/}
                             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                 {/*header*/}
                                 <div className="flex items-center justify-center p-5 rounded-t">
                                     <h3 className="text-3xl text-black text-center font-semibold">
                                         Create Customer
                                     </h3>
                                     <button
                                         onClick={() => {
                                             setShowModal(false), setError("");
                                         }}
                                         className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                                     >
                                         ✕
                                     </button>
                                 </div>
                                 
                                 <form
                                     className="p-10 pt-0"
                                     onSubmit={handleSubmit}
                                 >
                                     {error && (
                                         <div className="flex justify-center items-center gap-1">
                                             {" "}
                                             <svg
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth={3}
                                                 stroke="currentColor"
                                                 className="w-5 h-5 text-red-500"
                                             >
                                                 <path
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round"
                                                     d="M6 18L18 6M6 6l12 12"
                                                 />
                                             </svg>{" "}
                                             <p className="text-md font-bold text-red-500 text-center">
                                                 {error}
                                             </p>
                                         </div>
                                     )}
 
                                     <div className="space-y-4 my-5">
                                         <input
                                             placeholder="Name"
                                             name="name"
                                             className="input input-bordered bg-white input-md rounded-md w-full"
                                         />
                                         <input
                                             placeholder="Phone"
                                             name="phone"
                                             className="input input-bordered bg-white input-md rounded-md w-full"
                                         />
                                         <input
                                             placeholder="Password"
                                             name="password"
                                             className="input input-bordered bg-white input-md rounded-md w-full"
                                         />
                                     </div>
 
                                     <button
                                         disabled={isLoading}
                                         
                                         type="submit"
                                         className={
                                             "flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800"
                                         }
                                     >
                                         {isLoading ? (
                                             <div className="flex justify-center">
                                                ...
                                             </div>
                                         ) : (
                                             "Create Customer"
                                         )}
                                     </button>
                                 </form>
                             </div>
                         </div>
                     </div>
                     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 </>
             ) : null}
         </div>
       </div>
     </section>
     </div>
    );
};

export default Customers;

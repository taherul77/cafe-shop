import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../../component/hook/url';

const Product = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    
  
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        axios.get(`${BASE_URL}/product`)
        .then(function (response) {
            setData(response?.data?.data);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
       
        const rate = form.rate.value;
        const image = form.image.value;
        const price = form.price.value;
        const discount_price = form.discount_price.value;


        const data = {
            name,
            description,
            rate,
            image,
            price,
            discount_price,
        };

        const token = localStorage.getItem("accessToken");

        setIsLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/product/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Product Created Successful");
                setShowModal(false);
                setTimeout(() => window.location.reload(), 2000);
                console.log("Menu item created successfully!");
            } else {
                console.error("Failed to create menu item:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

        setIsLoading(false);
    };
    return (
        <div>
       <p className="flex text-2xl md:text-3xl mt-5 text-gray-600 uppercase font-medium leading-10 text-center justify-center md:text-left">
        Product
      </p>
    <section className="py-3 sm:py-5">
      
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-black">All Products : </span>
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
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  
                  <th scope="col" className="px-4 py-3">
                    Product
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Discount Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Rating
                  </th>
                 
                </tr>
              </thead>
              <tbody>
               
                 {
                    data?.map((product,i)=>
                        <tr key={i} className="border-b ">
                        
                        <th
                          scope="row"
                          className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <img
                            height={100}
                            width={100}
                            src={product?.image}
                            alt="iMac Front Image"
                            className="w-auto h-8 mr-3"
                          />
                         {product?.name}
                        </th>
    
                        <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                       ${product?.price}
                        </td>
                        <td className="px-4 py-2 font-medium text-black whitespace-nowrap">
                          ${product?.discount_price}
                        </td>
                        <td className="px-4 py-2 font-medium text-black whitespace-nowrap ">
                          <div className="flex items-center">
                          <span className="ml-1 text-gray-500 ">{product?.rate}</span>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                             
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            
                           
                          </div>
                        </td>
                       
                      </tr>
                    )
                 }
             
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
                                        Create Product
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setShowModal(false),
                                                setShowDropDown(false);
                                        }}
                                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                                    >
                                        ✕
                                    </button>
                                </div>
                                {/*body*/}
                                <form
                                    className="p-10 pt-0"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="space-y-4 my-5">
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="input input-bordered bg-white input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Description"
                                            name="description"
                                            className="input input-bordered bg-white input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Rating"
                                            name="rate"
                                            className="input input-bordered bg-white input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Image URL"
                                            name="image"
                                            className="input input-bordered bg-white input-md rounded-md w-full"
                                        />
                                        

                                        <input
                                            placeholder="Price"
                                            name="price"
                                            className="input input-bordered bg-white input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Discount Price"
                                            name="discount_price"
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
                                                .....
                                            </div>
                                        ) : (
                                            "Create Product"
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

export default Product;
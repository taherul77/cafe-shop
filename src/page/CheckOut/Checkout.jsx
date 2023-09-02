import ShopBanner from "../../component/Page/OurShop/ShopBanner";
import { BASE_URL } from "../../component/hook/url";
import { useAuth } from "../../context/AuthProvider";
import GetCart from "../../helper/getCart";
import calculateTotal from "../../helper/totalPrice";
import image from "../../assets/banner/bannerall.jpg";

const Checkout = () => {
  const { currentUser } = useAuth();
  const { data } = GetCart();
  const { subtotal, shipping, total } = calculateTotal(data);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;

    let orderData = {};

    const order = data?.map((item) => {
      return {
        ...item[[0]],
        data: {
          ...item.data,
          quantity: item.quantity,
        },
        phone,
      };
    });

    orderData.order = order;
    orderData.price = total;
    orderData.name = name;
    orderData.phone = phone;
    orderData.address = address;

    console.log(orderData);

    fetch(`${BASE_URL}/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      });
  };

  return (
    <div className="bg-white">
      <ShopBanner img={image} heading={"Checkout"}></ShopBanner>
      <form onSubmit={handleSubmit}>
        <div className="flex  justify-center items-center py-9 px-4 md:px-6 lg:px-20 xl:px-44">
          <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 lg:space-y-0">
            <div className="flex w-full flex-col justify-start items-start">
              <div className="">
                <p className="text-xl font-semibold leading-5 text-black">
                  Shipping Details
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                <input
                  className="px-2  text-black rounded-md  py-4 w-full"
                  required={true}
                  disabled
                  readOnly
                  defaultValue={currentUser?.name}
                  type="text"
                  name="name"
                />

                <input
                  className=" px-2 border-b text-black rounded-md py-4 w-full"
                  required={true}
                  readOnly
                  disabled
                  defaultValue={currentUser?.phone}
                  type="phone"
                  name="phone"
                />
                <input
                  className="px-2 text-black rounded-md bg-gray-100 py-4 w-full"
                  required={true}
                  type="text"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <button
                type={"submit"}
                className="mt-8  font-medium focus:ring-2 rounded-md   hover:bg-yellow-700 py-4 w-full md:w-4/12 lg:w-full text-white bg-black"
              >
                Proceed to payment
              </button>
              <div className="mt-4 flex justify-start items-center w-full">
                <a
                  href="/"
                  className="text-base leading-4  hover:underline text-[#CA8E46]"
                >
                  Continue Shopping
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start bg-gray-50  w-full p-6 md:p-14">
              <div>
                <h1 className="text-2xl font-bold text-black">Order Summary</h1>
              </div>
              <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg  text-black">Sub Total</p>
                  <p className="text-lg font-semibold leading-4 text-black">
                    ${subtotal}
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg  leading-4 text-black">
                    Shipping charges
                  </p>
                  <p className="text-lg  font-semibold leading-4 text-black">
                    ${shipping}
                  </p>
                </div>
              </div>

              <div className="flex justify-between w-full items-center border-t border-black py-2 mt-32">
                <p className="text-xl font-semibold leading-4 text-black">
                  Total
                </p>

                <p className="text-lg font-semibold leading-4 text-black">
                  ${total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

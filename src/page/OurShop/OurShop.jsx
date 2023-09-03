import Card from "../../component/Page/OurShop/Card";
import ShopBanner from "../../component/Page/OurShop/ShopBanner";

import Wrapper from "../../component/app/Wrapper";
import image from "../../assets/image/banner.png";
import useFetch from "../../component/hook/useFetch";
import { BASE_URL } from "../../component/hook/url";


const OurShop = () => {
  const getProduct = useFetch(`${BASE_URL}/product`);

  const product = getProduct.data.data;
  

  return (
    <div className="pb-10">
      <ShopBanner  img={image} heading={"OUR SHOP"}></ShopBanner>
      <Wrapper>
        <div className="grid grid-cols-12 gap-5 gap-y-10 ">
          {product?.map((product, index) => (
            <Card key={index} product={product}></Card>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default OurShop;

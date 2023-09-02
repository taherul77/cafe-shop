import Card from "../../component/Page/OurShop/Card";
import ShopBanner from "../../component/Page/OurShop/ShopBanner";

import Wrapper from "../../component/app/Wrapper";
import image from "../../assets/banner/bannerall.jpg";
import useFetch from "../../component/hook/useFetch";
import { BASE_URL } from "../../component/hook/url";

const OurShop = () => {
  const getProduct = useFetch(`${BASE_URL}/product`);

  const product = getProduct.data.data;

  return (
    <>
      <ShopBanner className="lg:h-screen" img={image} heading={"OUR  SHOP"}></ShopBanner>
      <Wrapper>
        <div className="grid grid-cols-12">
          {product?.map((product, index) => (
            <Card key={index} product={product}></Card>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default OurShop;

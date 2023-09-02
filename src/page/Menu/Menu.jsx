import MenuItem from "../../component/Page/Menu/MenuItem";
import ShopBanner from "../../component/Page/OurShop/ShopBanner";
import image from "../../assets/banner/bannerall.jpg";


const Menu = () => {
    return (
        <>
        <ShopBanner img={image} heading={"OUR Menu"}></ShopBanner>
        <MenuItem></MenuItem>
        </>
    );
};

export default Menu;
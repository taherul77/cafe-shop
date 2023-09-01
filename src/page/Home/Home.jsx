import Contact from "../../component/Page/Home/Contact";
import MenuItem from "../../component/Page/Home/MenuItem";
import Offer from "../../component/Page/Home/Offer";
import Spacial from "../../component/Page/Home/Spacial";
import Welcome from "../../component/Page/Home/Welcome";
import SectionTitle from "../../component/app/SectionTitle";


const Home = () => {
  return (
    <div>
      <Welcome></Welcome>
      <Offer></Offer>
      <Spacial></Spacial>
      <SectionTitle
        SubHeading={"Favorite"}
        heading={"Drinks"}
      ></SectionTitle>
      <MenuItem></MenuItem>
      <Contact></Contact>
    </div>
  );
};

export default Home;

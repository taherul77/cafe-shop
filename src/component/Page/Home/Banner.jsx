import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import banner4 from "../../../assets/banner/banner4.png";
import banner5 from "../../../assets/banner/banner5.png";

import { BiArrowBack } from "react-icons/bi";

const BannerImages = [banner1, banner2, banner3, banner4, banner5];

const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
      <Carousel
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {BannerImages.map((banner, index) => (
          <div key={index}>
            <img className="lg:h-screen w-2800" src={banner} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

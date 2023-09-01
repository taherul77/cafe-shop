import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

import image1 from "../../../assets/banner/banner1.png"
import image2 from "../../../assets/banner/banner2.png"
import image3 from "../../../assets/banner/banner3.png"
import image4 from "../../../assets/banner/banner4.png"
import image5 from "../../../assets/banner/banner5.png"



const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto ">
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
        <div>
            <img 
                alt=""
                src={image1}
                className="aspect-[16/10] h-[600px] md:aspect-auto object-cover"
            />
           
        </div>

        <div>
            <img 
                alt=""
                src={image2}
                className="aspect-[16/10] h-[600px] md:aspect-auto object-cover"
            />
           
        </div>

        <div>
            <img 
                alt=""
                src={image3}
                className="aspect-[16/10] h-[600px] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <img 
                alt=""
                src={image4}
                className="aspect-[16/10] h-[600px] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <img 
                alt=""
                src={image5}
                className="aspect-[16/10] h-[600px] md:aspect-auto object-cover"
            />
            
        </div>
        
    </Carousel>
</div>
  )
};

export default Banner;

import img1 from "../../../assets/image/img-1.png";

const Spacial = () => {
    return (
        <div className="grid lg:grid-cols-2 px-5 lg:px-20 gap-10 items-center justify-center text-center pt-28">
            <div className="">
             <h2 className="greatVibes text-[#CA8E46] lg:text-9xl text-8xl font-bold">Specials</h2>
             <h3 className="text-white text-5xl font-bold font-serif">OF THE DAY</h3>
             <h5 className="text-white text-xl font-bold mt-5">Classic Cappuccino</h5>
             <p className="mt-2">Composed of a single espresso shot and hot milk, with the surface topped with foamed milk. Prepared with an espresso machine.</p>
            </div>
            <div>
            <div className="absolute  bg-[#CA8E46] rounded-full lg:px-8 lg:py-10 px-5 py-7">
              <p className="text-center text-white font-bold text-4xl">600</p> 
              <p className="text-center text-white font-bold ">Sold Today</p>
            </div>
                <img src={img1} alt="" className="h-[400px] lg:h-[600px]" />
            </div>
        </div>
    );
};

export default Spacial;
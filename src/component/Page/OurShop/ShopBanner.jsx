/* eslint-disable react/prop-types */


const ShopBanner = ({ img,heading}) => {
    return (
        <div
        style={{ "--image-url": `url(${img})` }}
        className="bg-[image:var(--image-url)] lg:h-screen object-cover bg-no-repeat p-5 md:p-10 lg:px-20 lg:py-20 lg:pt-36 mb-16"
    >
        <div className=' text-[#CA8E46] md:px-10 lg:px-48 lg:py-64'>
            <div className="text-center">
                <h3 className="uppercase font-bold  text-6xl mb-5">{heading}</h3>
               
            </div>
        </div>
    </div>
    );
};

export default ShopBanner;
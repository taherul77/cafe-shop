/* eslint-disable react/prop-types */

     const SectionTitle = ({heading ,SubHeading}) => {
            return (
                <div className="mx-auto text-center my-8 md:w-4/12 mt-10">
            <p className="greatVibes text-[#CA8E46] text-6xl font-bold ">{SubHeading}</p>
            <h3 className="text-white font-bold text-4xl uppercase">{heading}</h3>
            

            
        </div>
            );
        };
        
      

export default SectionTitle;
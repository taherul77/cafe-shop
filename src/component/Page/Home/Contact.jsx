import location from '../../../assets/icons/location.png'
import coffee from '../../../assets/icons/coffee-cup.png'
import mail from '../../../assets/icons/mail.png'


const Contact = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8  sm:items-center ">
            <div className="text-center">
              <div className="flex items-center justify-center mt-2">
              <img src={location} alt=""/>
              </div>
              <div className="mt-2 space-y-3">
                <h3 className="text-white text-3xl font-bold">Location</h3>
                <div className="text-white">Shawrapara,Mirpur 10</div>
              </div>
            </div>
           
          </div>
          <div className="flex flex-col justify-between p-8 sm:items-center">
            <div className="text-center">
              <div className="flex items-center justify-center mt-2">
              <img src={coffee} alt=""/>
              </div>
              <div className="mt-2 space-y-3">
              <div className="mt-2 space-y-3">
                <h3 className="text-white text-3xl font-bold">Location</h3>
                <div className="text-white">Shawrapara,Mirpur 10</div>
              </div>
              </div>
            </div>
           
          </div>
          <div className="flex flex-col justify-between p-8 sm:items-center ">
            <div className="text-center">
              <div className="flex items-center justify-center mt-2">
              <img src={mail} alt=""/>
              </div>
              <div className="mt-2 space-y-3">
              <div className="mt-2 space-y-3">
                <h3 className="text-white text-3xl font-bold">Location</h3>
                <div className="text-white">Shawrapara,Mirpur 10</div>
              </div>
              </div>
            </div>
           
          </div>
         
        
        </div>
      </div>
    );
};

export default Contact;
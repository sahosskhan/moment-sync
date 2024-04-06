import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { useLoaderData, useParams } from "react-router-dom";

const BookingEvent = () => {
    const Event = useLoaderData();
    const { id } = useParams();
    const [EventData, setEventData] = useState({});
   useEffect(() => {
      const findEvent= Event.find((data) => data.id == id);
      setEventData(findEvent);
    }, [Event, id]);

    const { name, banner } = EventData || {};
    return (
        <div className="max-w-screen-2xl container mx-auto my-10">
                                      <Helmet>
        <title>Event Booking | Moment Sync</title>
      </Helmet>
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-300  dark:bg-gray-400 rounded-lg  ">
              <h1 className="text-4xl text-center font-bold  text-red-500">
                Confirm Your Booking For Event
              </h1>

<div className="text-3xl text-center font-bold mt-5 flex justify-center items-center gap-5">
  <img className="h-20 rounded-btn" src={banner} alt="" />
  <h1>{name}</h1>
</div>

              <form className="mt-6">
              <h2 className="text-2xl font-semibold my-4 text-black">Personal Information:</h2>

              <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>
               
                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Present Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Present Address"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                <div className="flex-1">
                  <label className="block  text-xl font-bold text-gray-700 ">
                  Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    className="block  text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                </div>



                <h2 className="text-2xl font-semibold mt-20 mb-4 text-black">Booking Information:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Event Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Event Location"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>
               

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Event Date
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Event Date"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>


                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Event Duration
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Event Duration"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Amount Of Guest
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Event's Amount Of Guest"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                </div>



      <div className="col-span-2 mt-4">
      <label className="block text-xl font-bold text-gray-700 ">
      What You Want In Your Event
                  </label>
        <textarea className="block text-lg mt-4 w-full px-5 py-3 text-gray-700 h-36 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                    placeholder="Enter What You Want In Your Event"
                  ></textarea>

      </div>


      
<div className="flex justify-between items-center mt-10">
  
<button className="text-xl font-bold transition-colors duration-700 hover:bg-gray-700 w-full h-14 rounded-lg bg-red-500 text-white "><span className="pr-8">Book Now</span></button>

</div>
         
              </form>
            </div>
          </div>
    

 
    );
};

export default BookingEvent;
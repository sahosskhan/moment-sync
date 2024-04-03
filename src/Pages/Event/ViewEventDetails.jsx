import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewEventDetails = () => {
    const Event = useLoaderData();
    const { id } = useParams();
    const [EventData, setEventData] = useState({});
   useEffect(() => {
      const findEvent= Event.find((data) => data.id == id);
      setEventData(findEvent);
    }, [Event, id]);

    const {  banner, name, details, charge } = EventData || {};

    return (
        <div className="max-w-screen-2xl container mx-auto my-[102px] ">
           <div className="lg:flex">
  <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{ name}</h2>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">{details}</p>
      <div className="flex flex-col mt-6 space-y-3 gap-4 lg:space-y-0 lg:flex-row">
        <button  className="block px-5 py-2 text-lg font-medium tracking-wider text-center text-white hover:scale-110 scale-100 transition-all duration-300 transform bg-red-500 rounded-md hover:bg-gray-700">Book Now</button>
    
      </div>
    </div>
  </div>
  <div className="w-full h-[500px] container mx-auto lg:w-[48%] lg:h-auto">
    <div className="w-full h-full rounded-lg bg-cover" style={{backgroundImage: `url(${banner})`}}>
      <div className="lg:w-[20%] md:w-[18%] w-1/3  font-bold  px-6 py-2 text-2xl text-center  bg-red-300 rounded-lg flex justify-center items-center " >{charge} $</div>
    </div>
  </div>
</div>

        </div>
    );
};

export default ViewEventDetails;
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

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
        <div className="max-w-screen-2xl container mx-auto my-[11.7vh] ">
                            <Helmet>
        <title>Event Details | Moment Sync</title>
      </Helmet>
           <div className="lg:flex">
  <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{ name}</h2>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">{details}</p>
      <div className="flex flex-col mt-6 space-y-3 gap-4 lg:space-y-0 lg:flex-row">
        <Link  to={`/confirm-event-booking/${id}`}>
        <button type="button" className="rounded-lg group relative h-14 w-48 overflow-hidden border-4 border-red-500 hover:border-none text-xl text-black font-bold hover:text-white"><span className="bg-red-500  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-red-400 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Confirm Book</button>

        </Link>
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
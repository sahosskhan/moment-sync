import { useLoaderData } from "react-router-dom";
import SuccessCard from "./SuccessCard";
import { Helmet } from "react-helmet-async";

const SuccessMain = () => {
    const successData = useLoaderData();
   
    return (
       <div className="max-w-screen-2xl container mx-auto">
                                    <Helmet>
        <title>Successful Event | Moment Sync</title>
      </Helmet>
        <h1 className="text-center font-bold text-4xl text-black dark:text-white my-16">Some Of Our <span className="text-red-500">Successful</span> Completed  <span className="text-red-500">Works</span></h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
               {
                   successData?.map(items=><SuccessCard key={items.id} items={items}></SuccessCard> )
                }
        </div>
       </div>

    );
};

export default SuccessMain;
import { useLoaderData } from "react-router-dom";
import EventCategory from "./EventCategory";


const MainEvent = () => {
    const EventData = useLoaderData();
    console.log(EventData);
    return (
        <div className="max-w-screen-2xl container mx-auto">
            


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
                {
                   EventData?.map(items=><EventCategory key={items.id} items={items}></EventCategory> )
                }
            </div>




        </div>
    );
};

export default MainEvent;
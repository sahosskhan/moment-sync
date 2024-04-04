import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookingEvent = () => {
    const Event = useLoaderData();
    const { id } = useParams();
    const [EventData, setEventData] = useState({});
   useEffect(() => {
      const findEvent= Event.find((data) => data.id == id);
      setEventData(findEvent);
    }, [Event, id]);

    const { name, charge } = EventData || {};
    return (
        <div className="max-w-screen-2xl container mx-auto my-10">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-300 rounded-lg  ">
              <h1 className="text-4xl text-center font-bold  text-red-400">
                Confirm Your Booking For Event
              </h1>

              <form className="mt-6">
              <h2 className="text-2xl font-semibold my-4 text-black">Personal Information:</h2>

              <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
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

                <div className="col-span-2">
                <div className="w-full mt-6">
                  <label className="block mb-2 text-xl font-bold text-gray-700 ">
                   Present Address
                  </label>
                  <textarea
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 h-28 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                    placeholder="Enter Your Present Address"
                  ></textarea>
                </div>
                </div>


                <h2 className="text-2xl font-semibold mt-20 mb-4 text-black">Booking Information:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Event Name
                  </label>
                  <input
                    type="text"
                   defaultValue={name}
                    className="block w-full text-lg px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

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
                    type="date"
                    placeholder="Enter Your Event Date"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>


                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Event Time
                  </label>
                  <input
                    type="time"
                    placeholder="Enter Your Event Time"
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
                Event Package
                  </label>
        <select id="event_package" name="event_package" className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring">
          <option disabled selected>Select Package</option>
          <option>Silver Package</option>
          <option>Gold Package</option>
          <option>Diamond Package</option>
          <option>Titanium Package</option>
          <option>Customize Package</option>
        </select>
      </div>

      <div className="col-span-2 mt-4">
      <label className="block text-xl font-bold text-gray-700 ">
      What You Want In Your Event
                  </label>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-4 mt-4">


          <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="DJ" /> Disc Jockey</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Photographer" /> Photographer</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Videographer" /> Videographer</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Cinematographer" /> Cinematographer</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Dance Band" /> Dance Band</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Music Band" /> Music Band</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Artist" /> Artist</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Beautician" /> Beautician</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Fashion Designer" /> Fashion Designer</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Promotion" /> Promotion</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Photo Artist" /> Photo Artist</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Catering" /> Catering</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Joker" /> Joker</label>
           <label className="text-xl font-medium text-black"><input className="" type="checkbox" name="event_demand[]" defaultValue="Teddy Man" /> Teddy Man</label>
        </div>
        <textarea className="block text-lg mt-4 w-full px-5 py-3 text-gray-700 h-36 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                    placeholder="Enter More What You Want In Your Event"
                  ></textarea>

      </div>


                <h2 className="text-2xl font-semibold mt-20 mb-4 text-black">Payment Information:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Payment Amount
                  </label>
                  <input
                    type="number"
                   defaultValue={charge}
                    className="block w-full text-lg px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

               

                <div className="flex-1">
                <label className="block text-xl font-bold text-gray-700 ">
                Payment Method
                  </label>
        <select id="event_package" name="event_package" className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring">
          <option disabled selected>Select Payment Method</option>
          <option>PayPal</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>bKash</option>
          <option>Nagad</option>
          <option>Bank Transfer</option>
        </select>
                </div>


                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Event Time"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xl font-bold text-gray-700 ">
                  CVV Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Event Duration"
                    className="block text-lg w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white border-black rounded-md  focus:border-red-500  focus:ring-red-500 focus:outline-0 focus:ring "
                  />
                </div>

                </div>
      
<div className="flex justify-between items-center mt-10">
  
<button className="w-full px-6 py-4 rounded-box text-center uppercase  text-xl border-none font-bold hover:bg-gray-700 text-white bg-red-500">
                  Book Event<i className=" fa-regular fa-paper-plane"></i>
                </button>

</div>
         
              </form>
            </div>
          </div>
    

 
    );
};

export default BookingEvent;
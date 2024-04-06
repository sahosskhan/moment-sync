import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EventCategory = ({items}) => {
    const { id,name,icon,shortDetails} =items;
  
    return (
        <Link to={`/view-event-details/${id}`}>
<div data-aos="fade-up" className="card w-auto bg-red-200 shadow-md  hover:scale-110 scale-100 transition-all duration-300">
  <figure className="px-10 pt-10">
    <img src={icon} alt="Shoes" className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className="text-xl text-gray-700" >{shortDetails}</p>
  </div>
</div>
        </Link>
    );
};

export default EventCategory;
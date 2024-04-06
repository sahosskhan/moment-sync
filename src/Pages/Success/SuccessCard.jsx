/* eslint-disable react/prop-types */
const SuccessCard = ({items}) => {
    const {name, banner, date, host} = items;
    return (
        <>
          <div className="mb-16 overflow-hidden h-auto bg-gray-50 rounded-lg shadow-md dark:bg-gray-600 ">
<img className="w-full h-72  hover:scale-110 scale-100 transition-all duration-300" src={banner} alt="Article"/>
<div className="p-5">
    <h1  className="text-2xl text-center text-red-600 dark:text-gray-200 font-bold ">{name}</h1>

<div className="mt-5 flex justify-between items-center gap-6">
<h1  className="text-lg text-center text-black font-semibold "><i className="fa-solid fa-user-gear"></i> {host}</h1>
<h1  className="text-lg text-center text-black font-semibold "><i className="fa-solid fa-calendar-days"></i> {date}</h1>
</div>
</div>
</div>  
        </>
    );
};

export default SuccessCard;
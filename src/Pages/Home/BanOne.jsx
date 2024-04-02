

const BanOne = () => {
    return (
        <>
      <div className="container px-6 py-16 mx-auto">
  <div className="items-center lg:flex ">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-800
         dark:text-white lg:text-5xl leading-loose">
            Plan and organize unforgettable events<br />
 with <span className="text-red-500 text-4xl ">Momentsync</span>
         </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Seamlessly coordinate events, collaborate with clients, manage budgets, and more with <span className="text-red-500">Momentsync</span> user-friendly event management tools.</p>
        <button className="w-40 h-12 border-2  hover:scale-110 scale-100 transition-all  mt-3 border-red-500 text-black dark:text-white  font-bold rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-red-500 group-hover:bg-red-500 group-hover:duration-500 -z-10"></span>Explore</button>
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
      <img className="w-full h-full lg:max-w-3xl rounded-lg" src="ban-one.webp" alt="" />
    </div>
  </div>
</div>
  
        </>
    );
};

export default BanOne;


const Banner = () => {
    return (
        <>
                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center dark:bg-gray-800 dark:text-white">
        <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl ">Sync your <span className="text-red-500">moments</span> with memories </h1>
                <p className="mt-4 text-gray-600 font-medium dark:text-gray-300">Sync your moments with us for memorable & enjoyable. We Bright Your Celebration In Your Way That Make Cool Atheistic Vibe That Bring Smile & Memorable .</p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">AI Technology</span>
                    </div>

                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">8k Drone Shoots</span>
                    </div>

                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">Professionals Touch</span>
                    </div>

                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">Highly Customizable</span>
                    </div>

                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">Artistic & Engaging</span>
                    </div>

                    <div className="flex items-center  hover:scale-110 scale-100 transition-all duration-100 text-gray-800 -px-3 dark:text-gray-200">
                    <i className="fa-solid fa-bullseye text-2xl text-rose-500"></i>

                        <span className="mx-3">Best Reliable Choice</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center  justify-center w-full h-96 lg:w-1/2">
            <img className=" object-cover w-full h-full max-w-2xl rounded-md" src="home-banner.jpg" alt="glasses photo"/>
        </div>
    </div>   
        </>
    );
};

export default Banner;
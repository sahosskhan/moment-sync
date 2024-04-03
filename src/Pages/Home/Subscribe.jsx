

const Subscribe = () => {
    return (
        <>
        <div className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="lg:max-w-5xl">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-red-500 animate-pulse">Newsletter</span></h1>

                <p className="mt-3 text-gray-600 text-lg dark:text-gray-400">Be the first to knows when our <span className="font-medium text-red-500">Event</span> is live</p>

                <div className="flex flex-col justify-center items-center  mt-4 space-y-3 lg:space-y-0 lg:flex-row">
                    <input id="email" type="text" className="px-3 py-2 w-full text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300" placeholder="Enter Your Email Address"/>

                    <button className="w-auto px-5 py-2 hover:scale-110 scale-100 transition-all duration-300 text-base tracking-wider text-white uppercase  transform bg-red-600 rounded-lg  lg:mx-4 hover:bg-gray-500 focus:outline-none focus:bg-red-500">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full max-w-xl rounded-xl" src="subscribe.webp" alt="email illustration vector art"/>
        </div>
    </div>
</div>
    </>
    );
};

export default Subscribe;
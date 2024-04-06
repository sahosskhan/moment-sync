

const AppDownload = () => {
    return (
        <>
                   <div className='py-20'>
          <section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col gap-10 justify-between items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
            <img  className="w-auto" src="app.png" alt="aa"/>
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Download our free mobile app
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Welcome to the future of convenience and connectivity! Download our app today and experience a whole new level of ease and enjoyment in your daily life. Whether you are on the go, at home, or anywhere in between, our app is your gateway to a world of possibilities.</p>

            <div className="mt-6 sm:-mx-2">
                <a href="#" className="inline-flex items-center justify-center w-full px-4 text-lg py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                <i className="fa-brands fa-app-store-ios"></i>

                    <span className="mx-2">
                        Get it on the App Store
                    </span>
                </a>

                <a href="#"
                    className="inline-flex items-center justify-center w-full px-4 text-lg py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-red-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                <i className="fa-brands fa-google-play"></i>

                    <span className="mx-2">
                        Get it on Google Play
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>  
        </div> 
        </>
    );
};

export default AppDownload;
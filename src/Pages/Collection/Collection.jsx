

const Collection = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
<section className="bg-white dark:bg-gray-900">
  <div className="max-w-3xl px-6 py-16 mx-auto text-center">
    <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Want to collect memory of yours?</h1>
    <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Enter your event ID our AI based tools find your face matched photo & video from event. Please enter valid event ID.</p>
    <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
      <input id="text" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40" placeholder="Enter Event ID" />
      <button className="px-4 py-2 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md sm:mx-2 hover:bg-red-600 focus:outline-none focus:bg-red-600">
        Get Started
      </button>
    </div>
  </div>
</section>

<div className="grid grid-cols-1 gap-8 mb-16  xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?wedding" alt />
</div>
<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?anniversary" alt />
</div>
<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?birthday" alt />
</div>
<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?wedding" alt />
</div>
<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?wedding" alt />
</div>
<div >
  <img className="object-cover w-full rounded-lg h-96 " src="https://source.unsplash.com/800x800/?wedding" alt />
</div>









</div>

            
        </div>
    );
};

export default Collection;


const Stats = () => {
    return (
<>
<div className="max-w-7xl mx-auto text-center mt-10">
            <h1 className="lg:text-5xl text-3xl font-semibold text-gray-800 dark:text-white ">Our <span className="text-red-500 lg:text-4xl text-2xl">Successful</span> Achievement & Completion</h1>
        </div>
<div className="flex items-center justify-center p-10 ">

<section className="p-6 my-6  text-gray-100">
	<div className="container grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		
		<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="350" className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-red-400">
			<i className="fa-regular fa-circle-check"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading">300+ Events</p>
				<p className="capitalize text-lg">Successfully Done</p>
			</div>
		</div>

		<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="350" className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-red-400">
            <i className="fa-regular fa-face-smile"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">10 Million+</p>
				<p className="capitalize text-lg">Happy Customer</p>
			</div>
		</div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="350" className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-red-400">
            <i className="fa-solid fa-person-running"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">12+ Events</p>
				<p className="capitalize text-lg">Running Successful</p>
			</div>
		</div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="350" className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-red-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-red-400">
            <i className="fa-solid fa-person-running"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">20+ Brands</p>
				<p className="capitalize text-lg">Sponsor Partners</p>
			</div>
		</div>
	

	</div>
</section>


</div>
</>
    );
};

export default Stats;


const About = () => {
    return (
        <div>
            <section className="bg-transparent text-black">
	<div className="p-10">
		<div>
		<h1 className="lg:text-5xl font-semibold text-center text-gray-800 capitalize text-3xl dark:text-white">Know <span className="text-red-500">About Us</span> That Who We Are?</h1>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold  sm:text-3xl text-red-500">Moment Sync</h3>
				<p className="mt-3 text-lg text-gray-400">Moment Sync is a premier event management company that specializes in crafting unforgettable experiences for clients across a wide spectrum of events. With a reputation for creativity, attention to detail, and exceptional customer service, Moment Sync has become a trusted partner in bringing dream events to life. Founded with a passion for turning ordinary occasions into extraordinary memories, this company has earned its place as a leader in the event planning industry. </p>
			</div>
			<div  className="mt-10 lg:mt-0">
				<img src="/logo.png" alt="" className="mx-auto hover:scale-110 scale-100 transition-all duration-300 " />
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;
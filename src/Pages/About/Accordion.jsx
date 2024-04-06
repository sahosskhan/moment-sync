
const Accordion = () => {
    return (
        <>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="lg:text-5xl mb-16 font-semibold text-center text-3xl">Frequently <span className="text-red-500">Asked</span> Questions</h2>
		<div className="gap-6 flex justify-center items-center flex-col ">
			<details className="w-4/5 border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none">How far in advance should I book your services for my wedding?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">It is advisable to book our services at least 6-12 months in advance, especially for popular wedding dates. However, we can accommodate last-minute bookings depending on availability.</p>
			</details>
			<details className="w-4/5 border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none">Can I hire specific vendors for my event, or do I have to use your recommended ones?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">While we have a list of trusted vendors, you are welcome to choose your own vendors if you have specific preferences. We can work with your chosen vendors to ensure everything runs smoothly.</p>
			</details>
			<details className="w-4/5 border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none">What is the payment structure for your event management services?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Our payment structure varies depending on the services you choose and the complexity of the event. We provide a detailed proposal with transparent pricing and payment schedules.</p>
			</details>
		</div>
	</div>
</section>
        </>
    );
};

export default Accordion;
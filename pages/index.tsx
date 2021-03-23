import Head from "next/head";

export default function Home() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font relative h-screen">
			<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
					<h1 className="title-font font-medium text-3xl text-white">
						picked item here
					</h1>
				</div>
				<div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<h2 className="text-white text-lg mb-1 font-medium title-font">
						Random list picker
					</h2>

					<div className="relative mb-4">
						<label
							htmlFor="quantity"
							className="leading-7 text-sm text-gray-400"
						>
							Quantity
						</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="options"
							className="leading-7 text-sm text-gray-400"
						>
							Options
						</label>
						<textarea
							id="options"
							name="options"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							defaultValue={""}
						/>
					</div>
					<button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
						Pick Items
					</button>
					<p className="text-xs text-gray-400 text-opacity-90 mt-3">
						The picker will take N random rows
					</p>
				</div>
			</div>
		</section>
	);
}

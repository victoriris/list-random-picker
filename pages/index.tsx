import { PicksList } from "../src/components/PicksList";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store";
import { pickItems, selectRandomizer, setItems } from "../store/randomizer";
import faker from "faker";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

type Inputs = {
	quantity: number;
	options: string;
};

export default function Home() {
	const dispatch = useAppDispatch();
	const { loading } = useSelector(selectRandomizer);
	const { register, handleSubmit, errors } = useForm<Inputs>({
		defaultValues: {
			quantity: 1,
			options: Array(5)
				.fill({})
				.map(() => faker.name.firstName())
				.join("\n"),
		},
	});
	const onSubmit = (data: Inputs) => {
		dispatch(setItems(data.options));
		dispatch(pickItems(data.quantity));
	};

	return (
		<section className="text-gray-400 bg-gray-900 body-font relative h-screen">
			<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<PicksList />
				<div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<form onSubmit={handleSubmit(onSubmit)}>
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
								ref={register({ required: true })}
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
								ref={register({ required: true })}
								id="options"
								name="options"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<button
							disabled={loading}
							type="submit"
							className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg flex flex-row items-center justify-between"
						>
							{loading && <FaSpinner color="white" className="animate-spin" />}
							Pick Items
						</button>
						<p className="text-xs text-gray-400 text-opacity-90 mt-3">
							The picker will take N random rows
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}

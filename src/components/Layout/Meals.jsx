import React, { useEffect, useState } from "react";
import MealItems from "../Meals/MealItems";
import { useContext } from "react";
import CartDataContext from "../../context/card-data-context";
const Meals = () => {
	const cartData = useContext(CartDataContext);
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchMeals = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					"https://reactmeals-2a9bb-default-rtdb.firebaseio.com/Meals.json"
				);
				if (!response.ok) {
					throw new Error("Something went wrong");
				}
				const data = await response.json();
				const LoadingData = [];
				for (const key in data) {
					LoadingData.push({
						id: parseInt(key.charAt(1)),
						name: data[key].name,
						description: data[key].description,
						price: data[key].price,
					});
				}
				setMeals(LoadingData);
				meals.length === 0 && cartData.fetchCartData(LoadingData);
			} catch (error) {
				console.log(error);
			}
			document
				.getElementById("meals-container")
				.classList.remove("translate-y-full", "opacity-0");
			setIsLoading(false);
		};
		fetchMeals();
	}, [cartData, meals.length]);

	return (
		<div className="flex-col">
			<div
				id="meals-container"
				className="bg-white w-4/5 py-4 px-10 rounded-2xl mb-10 mx-auto transform transition-all translate-y-full opacity-0 duration-1000 ease-in-out"
			>
				{meals.map((items) => {
					return (
						<div key={items.id}>
							<MealItems
								id={items.id}
								name={items.name}
								description={items.description}
								price={items.price}
							></MealItems>
							<hr className="bg-gray-300 h-0.5" />
						</div>
					);
				})}
			</div>
			{isLoading && (
				<svg
					className="animate-spin text-center mx-auto h-20 text-orange-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
		</div>
	);
};
export default Meals;

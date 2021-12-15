import React, { useContext, useState } from "react";
import CartDataContext from "../../context/card-data-context";
import "./MealItems.css";

const MealItems = ({ id, name, description, price }) => {
	const [amount, setAmount] = useState(1);

	const contextData = useContext(CartDataContext);

	const addToCartHandler = (event) => {
		event.preventDefault();
		contextData.addToCartHandler(id, amount);
		contextData.dispatchTotalCost({ type: "ADD", payload: amount * price });
		setAmount(1);
	};

	return (
		<div className="flex py-4">
			<div className="flex-grow">
				<h3 className="text-2xl font-bold">{name}</h3>
				<p className="text-lg font-light italic ">{description}</p>
				<p className="text-3xl text-orange-700 font-bold">${price}</p>
			</div>
			<form className="flex-col" onSubmit={addToCartHandler}>
				<div>
					<label htmlFor="amount" className="text-xl font-bold px-4">
						Amount
					</label>
					<input
						type="number"
						min="1"
						max="10"
						id="amount"
						step="1"
						value={amount}
						className="border-2 text-sm border-gray-300 rounded-lg pl-3 py-1 w-14 font-bold focus:outline-none"
						onChange={(event) => setAmount(parseInt(event.target.value))}
					/>
				</div>
				<button
					type="submit"
					className="px-10 py-2 block ml-auto mt-3 bg-orange-700 text-center text-white font-bold rounded-full hover:bg-orange-800"
					onClick={addToCartHandler}
				>
					+Add
				</button>
			</form>
		</div>
	);
};

export default MealItems;

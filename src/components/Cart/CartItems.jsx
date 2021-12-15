import React, { useContext } from "react";
import CartDataContext from "../../context/card-data-context";

const CartItems = ({ id, name, price, quantity }) => {
	const contextData = useContext(CartDataContext);

	return (
		<div className="flex border-b-2 border-orange-700 items-center mb-5 mr-3">
			<div className="flex-grow">
				<h2 className="text-3xl font-bold">{name}</h2>
				<div className="flex w-1/2 py-2 pb-5 items-center">
					<p className="flex-grow text-orange-600 text-xl font-bold">
						${price}
					</p>
					<span className="border-2 border-gray-200 rounded-md px-2 font-medium">
						x {quantity}
					</span>
				</div>
			</div>
			<div className="flex space-x-3 h-10 items-center">
				<button
					className="border-2 border-orange-600 rounded-lg px-5 text-xl text-orange-700 font-bold hover:text-white hover:bg-orange-700"
					onClick={() => {
						contextData.removeFromCartHandler(id);
						contextData.dispatchTotalCost({ type: "REMOVE", payload: price });
					}}
				>
					-
				</button>
				<button
					className="border-2 border-orange-600 rounded-lg px-5 text-xl text-orange-700 font-bold hover:text-white hover:bg-orange-700"
					onClick={() => {
						contextData.addToCartHandler(id);
						contextData.dispatchTotalCost({ type: "ADD", payload: price });
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default CartItems;

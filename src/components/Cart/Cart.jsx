import React, { useEffect } from "react";
import { useContext } from "react";
import CartDataContext from "../../context/card-data-context";
import CartContext from "../../context/cart-context";
import CartItems from "./CartItems";

const Cart = () => {
	const context = useContext(CartContext);
	const contextData = useContext(CartDataContext);

	useEffect(() => {
		document.getElementById("cart-container").classList.remove("scale-0");
	}, []);

	return (
		<div
			id="cart-container"
			className="bg-white p-8 w-5/12 h-90 rounded-2xl transform scale-0 duration-200 ease-in-out"
		>
			{contextData.cartData.filter((meal) => meal.quantity > 0).length > 0 ? (
				<>
					<div className="h-28 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 overflow-y-scroll">
						{contextData.cartData
							.filter((meal) => meal.quantity > 0)
							.map((meal) => {
								return (
									<CartItems
										key={meal.id}
										id={meal.id}
										name={meal.name}
										price={meal.price}
										quantity={meal.quantity}
									/>
								);
							})}
					</div>
					<div>
						<p className="flex text-2xl font-bold">
							<span className="flex-grow ">Total Amount:</span>
							<span>${contextData.totalCost}</span>
						</p>
						<div className="flex space-x-5 pt-5">
							<button
								className="ml-auto border-2 border-orange-700 rounded-full py-2 px-8 text-base font-medium text-orange-700 hover:text-white hover:bg-orange-700 "
								onClick={context.CloseCart}
							>
								Close
							</button>
							<button className="bg-orange-700 text-white rounded-full py-2 px-8 text-base font-medium hover:bg-orange-800">
								Order
							</button>
						</div>
					</div>
				</>
			) : (
				<h1 className="text-5xl font-bold text-orange-300 text-center p-20">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
					Your Cart is Empty
				</h1>
			)}
		</div>
	);
};

export default Cart;

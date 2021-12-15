import React, { useContext, useEffect, useState } from "react";
import CartDataContext from "../../context/card-data-context";
import CartContext from "../../context/cart-context";

const Navbar = () => {
	const context = useContext(CartContext);
	const contextData = useContext(CartDataContext);

	const [cartQuantity, setCartQuantity] = useState(0);

	useEffect(() => {
		const addItemsHandler = setTimeout(() => {
			setCartQuantity(
				contextData.cartData.reduce((count, item) => {
					return count + item.quantity;
				}, 0)
			);
			document.getElementById("cart-btn").classList.remove("scale-75");
		}, 100);
		return () => {
			clearTimeout(addItemsHandler);
			contextData.cartData.reduce((count, item) => {
				return count + item.quantity;
			}, 0) && document.getElementById("cart-btn").classList.add("scale-75");
		};
	}, [contextData.cartData]);

	return (
		<nav className="flex px-32 py-3 items-center bg-orange-700">
			<h1 className="text-4xl text-white font-bold flex-grow">React Meals</h1>
			<button
				className={`flex items-center bg-orange-800 py-3 px-16 text-xl font-bold text-white rounded-full group transform hover:bg-orange-900 ease-in-out duration-100`}
				onClick={context.OpenCart}
				id="cart-btn"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 text-white mr-3"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
				</svg>
				Your Cart
				<span className="ml-3 px-5 text-lg py-1 rounded-full bg-orange-600 group-hover:bg-orange-700 text-white">
					{cartQuantity}
				</span>
			</button>
		</nav>
	);
};

export default Navbar;

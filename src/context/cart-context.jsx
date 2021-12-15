import React, { useState } from "react";

const CartContext = React.createContext({
	isCartOpen: false,
	OpenCart: () => {},
	CloseCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const OpenCart = () => {
		setIsCartOpen(true);
		document.body.style.overflow = "hidden";
	};

	const CloseCart = () => {
		document.getElementById("cart-container").classList.add("scale-0");
		document.getElementById("modal").classList.add("opacity-0");
		document.body.style.overflow = "auto";
		setTimeout(() => {
			setIsCartOpen(false);
		}, 1000);
	};

	return (
		<CartContext.Provider value={{ isCartOpen, OpenCart, CloseCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;

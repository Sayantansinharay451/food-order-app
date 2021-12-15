import React, { useContext, useEffect } from "react";
import CartContext from "../../context/cart-context";
import Cart from "../Cart/Cart";

const Modal = () => {
	const context = useContext(CartContext);

	useEffect(() => {
		document.getElementById("modal").classList.remove("bg-opacity-0");
		document.getElementById("modal").classList.add("bg-opacity-50");
	}, []);

	const clickModalHandler = (event) => {
		if (event.target.getAttribute("id") === "modal") {
			context.CloseCart();
		}
	};

	return (
		<div
			className="absolute top-0 z-40 w-full h-screen bg-black bg-opacity-0 flex justify-center items-center duration-200 ease-in-out"
			id="modal"
			onClick={clickModalHandler}
		>
			<Cart></Cart>
		</div>
	);
};

export default Modal;

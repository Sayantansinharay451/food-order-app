import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Hero from "../UI/Hero";
import Modal from "../UI/Modal";
import Navbar from "../UI/Navbar";

const Header = () => {
	const context = useContext(CartContext);

	return (
		<>
			<div className="fixed z-10 w-full">
				<Navbar></Navbar>
				<div
					id="modal-cart"
					className="transition-opacity ease-out duration-200"
				>
					{context.isCartOpen && <Modal />}
				</div>
			</div>
			<Hero></Hero>
		</>
	);
};

export default Header;

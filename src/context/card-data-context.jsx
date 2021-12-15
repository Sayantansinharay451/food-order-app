import React, { useReducer, useState } from "react";

const CartDataContext = React.createContext({
	cartData: [],
	fetchCartData: (MealItems) => {},
	addToCartHandler: (id, amount) => {},
	removeFromCartHandler: (id) => {},
	totalCost: 0,
	dispatchTotalCost: (id, amount) => {},
});

const totalCostReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return Math.round((state + action.payload + Number.EPSILON) * 100) / 100;
		case "REMOVE":
			return Math.round((state - action.payload + Number.EPSILON) * 100) / 100;
		default:
			return state;
	}
};

export const CartDataProvider = ({ children }) => {
	const [cartData, setCartData] = useState([]);

	const fetchCartData = (Meals) => {
		setCartData(
			Meals.map((meal) => {
				return {
					id: meal.id,
					name: meal.name,
					price: meal.price,
					quantity: 0,
				};
			})
		);
	};

	const [totalCost, dispatchTotalCost] = useReducer(
		totalCostReducer,
		0.0,
		() => {
			return cartData.reduce((total, meal) => {
				return total + meal.price * meal.quantity;
			}, 0.0);
		}
	);

	const addToCartHandler = (id, amount = 1) => {
		const newCartData = [...cartData];
		const selectedMeal = newCartData.find((meal) => meal.id === id);
		selectedMeal.quantity += amount;
		setCartData(newCartData);
	};

	const removeFromCartHandler = (id) => {
		const newCartData = [...cartData];
		const selectedMeal = newCartData.find((meal) => meal.id === id);
		selectedMeal.quantity -= 1;
		setCartData(newCartData);
	};

	return (
		<CartDataContext.Provider
			value={{
				fetchCartData,
				cartData,
				addToCartHandler,
				removeFromCartHandler,
				totalCost,
				dispatchTotalCost,
			}}
		>
			{children}
		</CartDataContext.Provider>
	);
};

export default CartDataContext;

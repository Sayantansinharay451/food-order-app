import React, { useContext } from "react";
import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import * as Yup from "yup";
import CartDataContext from "../../context/card-data-context";

const SubmitForm = () => {
	const validate = Yup.object({
		name: Yup.string()
			.max(10, "Can't be more than 10 characters")
			.required("Required"),
		street: Yup.string()
			.max(15, "Can't be more than 15 characters")
			.required("Required"),
		postal_code: Yup.string()
			.min(7, "must be of 7 characters")
			.max(7, "must be of 7 characters")
			.required("Required"),
		city: Yup.string()
			.max(10, "Can't be more than 10 characters")
			.required("Required"),
	});

	const contextData = useContext(CartDataContext);

	return (
		<Formik
			initialValues={{
				name: "",
				street: "",
				postal_code: "",
				city: "",
			}}
			validationSchema={validate}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				const data = {
					customerDetails: values,
					orderDetails: contextData.cartData.filter(
						(meal) => meal.quantity > 0
					),
					totalCost: contextData.totalCost,
				};
				const submitData = async () => {
					try {
						const response = await fetch(
							"https://reactmeals-2a9bb-default-rtdb.firebaseio.com/Orders.json",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(data),
							}
						);
						if (!response.ok) {
							throw new Error("Something went wrong");
						}
						setSubmitting(false);
					} catch (err) {
						console.log(err);
					}
				};
				submitData();
			}}
		>
			{(formik) => (
				<Form className="mt-8" name="checkout-form" id="checkout-form">
					<FormInput
						label="Name"
						name="name"
						id="name"
						placeholder="Name"
						type="text"
					/>
					<FormInput
						label="Street"
						name="street"
						id="street"
						placeholder="Street"
						type="text"
					/>
					<FormInput
						label="Postal Code"
						name="postal_code"
						id="postal_code"
						placeholder="Postal Code"
						type="number"
					/>
					<FormInput
						label="City"
						name="city"
						id="city"
						placeholder="City"
						type="text"
					/>
				</Form>
			)}
		</Formik>
	);
};

export default SubmitForm;

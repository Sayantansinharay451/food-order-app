import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";

const FormInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	const [error, setError] = useState(false);
	// field.onBlur(() => {
	// 	console.log("ho");
	// });
	return (
		<div className="flex mr-36 ">
			<label htmlFor={field.name} className="text-2xl font-semibold flex-1">
				{label}
			</label>
			<div className="flex flex-col w-3/5">
				<input
					{...field}
					{...props}
					autoComplete="nofill" // disable autofill
					className={`py-0.5 pl-2 border-2 outline-none  rounded-lg ${
						meta.touched && meta.error
							? "focus:shadow-red-sm border-red-500 "
							: "focus:shadow-orange-sm border-orange-500 mb-8"
					}  text-lg`}
				/>
				<ErrorMessage
					name={field.name}
					component="div"
					className="text-red-600 mb-2"
				/>
			</div>
			{/* {console.log("{", field.name, meta.error, "}")} */}
		</div>
	);
};

export default FormInput;

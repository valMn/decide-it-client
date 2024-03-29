import React from "react";
// import "./InputNumber.scss";

const InputNumber = ({ name, label, value, min = 0, handleOnChange }) => {
	return (
		<>
			<label htmlFor={name} className="input__label h3">
				{" "}
				{label}
			</label>
			<input
				min={min}
				onChange={handleOnChange}
				className="input__field p-medium"
				type="number"
				name={name}
				label={label}
				placeholder={label}
				value={value}
			/>
		</>
	);
};

export default InputNumber;

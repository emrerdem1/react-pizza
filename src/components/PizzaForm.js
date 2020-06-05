import React, { useState } from 'react';

const PizzaForm = ({ alterValues: { size, topping, vegetarian } }) => {
	const [ input, setInput ] = useState('');
	const [ dropdown, setDropdown ] = useState('');
	const [ radioOption, setRadio ] = useState('');
	const handleChange = (e) => setInput(e.target.value);
	return (
		<div className="form-row">
			<div className="col-5">
				<input
					type="text"
					className="form-control"
					placeholder="Pizza Topping"
					value={topping || input}
					onChange={handleChange}
				/>
			</div>
			<div className="col">
				<select
					defaultValue={dropdown}
					value={size || dropdown}
					className="form-control"
					onChange={(e) => setDropdown(e.target.value)}
				>
					<option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
				</select>
			</div>
			<div className="col">
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						value="Vegetarian"
						checked={radioOption}
						onChange={(e) => setRadio(true)}
					/>
					<label className="form-check-label">Vegetarian</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						value="Not Vegetarian"
						checked={!radioOption}
						onChange={(e) => setRadio(true)}
					/>
					<label className="form-check-label">Not Vegetarian</label>
				</div>
			</div>
			<div className="col">
				<button type="submit" className="btn btn-success" onClick={console.log}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default PizzaForm;

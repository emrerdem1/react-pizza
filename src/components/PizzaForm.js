import React, { useState } from 'react';
import Pizza from './Pizza';
import PizzaList from '../containers/PizzaList'

const PizzaForm = () => {
	const [ topping, setTopping ] = useState('');
	const [ size, setSize ] = useState('');
	const [ RadioStatus, setRadioStatus ] = useState({
		isSelected_1: false,
		isSelected_2: false
	});

	const sendThem = () => {
		let selectedRadio = document.querySelector('input:checked').value;
		return (<PizzaList size={size} topping={topping} radioPreference={selectedRadio} />)
	};
	console.log(size);
	return (
		<div className="form-row">
			<div className="col-5">
				<input
					type="text"
					className="form-control"
					placeholder="Pizza Topping"
					value={topping}
					onChange={(e) => setTopping(e.target.value)}
				/>
			</div>
			<div className="col">
				<select value={size} onChange={(e) => setSize(e.target.value)} className="form-control">
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
						name="Vegetarian"
						checked={RadioStatus.isSelected_1}
						onChange={() => setRadioStatus({ isSelected_1: !RadioStatus['isSelected_1'] })}
					/>
					<label className="form-check-label">Vegetarian</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						value="Not Vegetarian"
						name="Not Vegetarian"
						checked={RadioStatus.isSelected_2}
						onChange={() => setRadioStatus({ isSelected_2: !RadioStatus['isSelected_2'] })}
					/>
					<label className="form-check-label">Not Vegetarian</label>
				</div>
			</div>
			<div className="col">
				<button type="submit" className="btn btn-success" onClick={sendThem}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default PizzaForm;

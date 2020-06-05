import React from 'react';
//, { topping, size, vegetarian, pizzaCallbackPropfromList }
const Pizza = (props) => {
	//console.log(props);
	const pizzaEdit = () => {
		return props.pizzaCallbackPropfromList(props.topping, props.size, props.vegetarian);
	};
	return (
		<tr>
			<td>{props.topping}</td>
			<td>{props.size}</td>
			<td>{props.vegetarian ? 'Yes' : 'No'}</td>
			<td>
				<button type="button" className="btn btn-primary" onClick={pizzaEdit}>
					Edit Pizza
				</button>
			</td>
		</tr>
	);
};

export default Pizza;

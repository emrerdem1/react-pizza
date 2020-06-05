import React, { Component } from 'react';
import Pizza from '../components/Pizza';
class PizzaList extends Component {
	constructor(props) {
		super(props);
	}

	pizzaCallback = (topping, size, vegetarian) => {
		return this.props.pizzaCallbackFromApp(topping, size, vegetarian);
	};
	render() {
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Topping</th>
						<th scope="col">Size</th>
						<th scope="col">Vegetarian?</th>
						<th scope="col">Edit</th>
					</tr>
				</thead>
				<tbody>
					{//render Pizza here
					this.props.pizzas.map((pizza, index) => {
						return (
							<Pizza
								key={pizza.toString() + index}
								topping={pizza.topping}
								size={pizza.size}
								vegetarian={pizza.vegetarian}
								pizzaCallbackPropfromList={this.pizzaCallback}
							/>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default PizzaList;

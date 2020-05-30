import React, { Component } from 'react';
import Pizza from '../components/Pizza';
class PizzaList extends Component {
	constructor(props) {
		super(props);
	}
	pizzaCallback = (topping, size, type) => {
		return this.props.pizzaCallbackFromApp(topping, size, type);
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
					this.props.pizzas.map((pizza) => {
						return (
							<Pizza
								topping={pizza.topping}
								size={pizza.size}
								type={pizza.type}
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

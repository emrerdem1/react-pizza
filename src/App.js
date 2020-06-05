import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pizzas: [],
			editedPizza: {
				topping: '',
				size: '',
				vegetarian: ''
			},
			status: false
		};
	}
	componentDidMount() {
		fetch('http://localhost:3333/pizzas').then((response) => response.json()).then((data) => {
			this.setState({
				pizzas: data,
				status: true
			});
		});
	}
	pizzaCallbackFunc = (topping, size, vegetarian) => {
		return this.setState({
			editedPizza: {
				topping: topping,
				size: size,
				vegetarian: vegetarian
			}
		});
	};
	render() {
		return (
			<Fragment>
				<Header />
				{this.state.editedPizza.topping && <PizzaForm alterValues={this.state.editedPizza} />}
				{this.state.status ? (
					<PizzaList pizzas={this.state.pizzas} pizzaCallbackFromApp={this.pizzaCallbackFunc} />
				) : (
					<PizzaList pizzas={this.state.pizzas} />
				)}
			</Fragment>
		);
	}
}

export default App;

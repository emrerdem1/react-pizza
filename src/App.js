import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizzas: [],
      editedPizza: {
        topping: '',  
        size: '',
        type: ''
      }
    }
  }
  
  pizzaCallbackFunc = (topping, size, type) => {
    console.log(topping);
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList pizzas={this.state.pizzas} pizzaCallbackFromApp={this.pizzaCallbackFunc} />
      </Fragment>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3001/pizzas')
      .then(response => response.json())
      .then(data => {
        this.setState({
          pizzas: data
        })
      })
  }

}

export default App;

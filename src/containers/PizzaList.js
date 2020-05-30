import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {topping, size, radioPreference, selectedRadio} = this.props;
    console.log(this.props)
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
          {
            <Pizza size={this.props.size} topping={this.props.topping} radioPreference={this.props.selectedRadio} />
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

import React from "react"

const Pizza = ({topping, size, type, pizzaCallbackPropfromList}) => {

  const pizzaEdit = (topping, size, type) => {
    console.log('pizza ' + size)
    return pizzaCallbackPropfromList(topping, size, type);
  }
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{type}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={pizzaEdit} >Edit Pizza</button>
      </td>
    </tr>
  )
}

export default Pizza

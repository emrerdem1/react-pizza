import React from "react"

const Pizza = ({topping, size, radioPreference}) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{radioPreference}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

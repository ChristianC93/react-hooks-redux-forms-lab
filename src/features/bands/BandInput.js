import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");
  

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name)
    setName("");
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={ name } onChange={ handleChange }/>
        <button type="submit">Add Band</button>
      </form>
      <p>Form Text: { name }</p> 
    </div>
  )
}

export default BandInput;

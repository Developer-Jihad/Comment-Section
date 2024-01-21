import React from "react";
import './InputComponent.css'

export default function InputComponent({
  id,
  name,
  labelText,
  type = "text",
}) {
  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <input
        type={type}
        id={id}
        name={name}
        required
      />
      
    </div>
  );
}

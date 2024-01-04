import React from 'react'
import "./TextInput.css"

export const TextInput = (props) => {
    
  return (
    <div>
      <label >
      <input className={props.description ? 'input-description' : 'input-text'} name="input"/>
      </label>
    </div>
  )
}
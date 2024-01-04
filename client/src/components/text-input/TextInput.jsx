import React from 'react'
import "./Text-input.css"

export const TextInput = (props) => {
    
  return (
    <div>
      <label >
        <input className={props.description ? 'input-description' : 'input-text'} name="input"/>
      </label>
    </div>
  )
}
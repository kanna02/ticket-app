import React from 'react'
import "./Button.css"


export const Button = ({ text, onClick }) => {
  return (
    <button className="btn-save" onClick={onClick}>
      {text}
    </button>
  )
}


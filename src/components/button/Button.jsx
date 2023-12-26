import React from 'react'
import "../../App.css"


export const Button = ({ text, onClick }) => {
  return (
    <button className="btn-save" onClick={onClick}>
      {text}
    </button>
  )
}

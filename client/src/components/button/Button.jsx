import React from 'react'
import "./Button.css"


export const Button = (props) => {
  return (
    <button className={(props.save && `btn-save`) || (props.cancel && 'btn-cancel')} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
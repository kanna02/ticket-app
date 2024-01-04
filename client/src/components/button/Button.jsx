import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./Button.css"

export const Button = (props) => {
  return (
    <button className={(props.save && `btn-save`) || (props.cancel && 'btn-cancel') || (props.round && 'btn-round')} onClick={props.onClick}>
      {props.plus ? <FontAwesomeIcon icon={faPlus} /> : props.text}
    </button>
  );
};
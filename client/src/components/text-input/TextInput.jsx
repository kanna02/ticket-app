import React from 'react';
import "./TextInput.css";

export const TextInput = (props) => {
  return (
    <div className='input-containers'>
      {props.label && <label className='input-label'>{props.label}</label>}
      <input className={props.description ? 'input-description' : 'input-text'} value={props.value} onChange={props.setValue} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

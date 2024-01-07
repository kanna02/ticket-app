import React from 'react';
import "./TextInput.css";

export const TextInput = (props) => {
  return (
    <div className={props.margin &&'input-containers'}>
      {props.label && <label className='input-label'>{props.label}</label>}
      <input disabled={props.disabled} className={props.description ? 'input-description' : 'input-text'} value={props.value} onChange={props.setValue} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

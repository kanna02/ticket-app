import React from 'react';
import "./TextInput.css";

export const TextInput = ({ label, name, placeholder, value, setValue }) => {
  return (
    <div className='input-containers'>
      {label && <label className='input-label'>{label}</label>}
      <input className='input-text' value={value} onChange={setValue} name={name} placeholder={placeholder} />
    </div>
  );
};

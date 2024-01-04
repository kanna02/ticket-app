import React from 'react';
import "./Text-input.css";

export const TextInput = ({ label, name, placeholder }) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input className='input-text' name={name} placeholder={placeholder} />
    </div>
  );
};
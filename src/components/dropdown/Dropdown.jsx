import React from 'react';
import "../../components-css/Dropdown.css"

export const Dropdown = ({ options, onSelect, selectedOption }) => {
  return (
    <select className="dropdown" onChange={onSelect} value={selectedOption}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

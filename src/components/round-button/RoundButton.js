import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './RoundButton.css';

export const RoundButton = ({ onClick }) => {
  return (
    <button className="round-button" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

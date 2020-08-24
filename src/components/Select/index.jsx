import React from 'react';
import './select.scss';

function Select({ name, options, setCurrency }) {
  console.log(options);
  return (
    <>
      <label for="browser">Choose your browser from the list:</label>
      <input list="browsers" name={name} id={name} />
      <datalist id="browsers">
        {options.map((option, index) => (
          <option value={option} id={index} />
        ))}
      </datalist>
    </>
  );
}

export default Select;

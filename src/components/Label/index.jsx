import React from 'react';
import './label.scss';

function Label({ value }) {
  return <label className="label">{value}</label>;
}

export default Label;

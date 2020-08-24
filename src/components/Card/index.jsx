import React from 'react';
import './card.scss';

function Card({ from, to, price, jet, departure, duration, arrival }) {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">
          {to} To {from}
        </h1>
        <h3 className="card-sub-title">Rs: {price}</h3>
      </div>
      <div className="card-body">
        <div className="jet">{jet}</div>
        <div className="departure">{departure}</div>
        <div className="duration">{duration}</div>
        <div className="arrival">{arrival}</div>
        <button>Book Flight</button>
      </div>
    </div>
  );
}

export default Card;

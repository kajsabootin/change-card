import React from 'react';

export const CardOne = ({handelClicked}) => {

  return (
    <div className="card-one">
      <p> Water!</p>
      <div className="div-btn">
        <button 
          onClick={handelClicked}>
          Fanta!
        </button>
      </div>
    </div>
  )
}
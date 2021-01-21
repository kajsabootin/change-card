import React from 'react'

export const CardTwo = ({handelClicked}) => {
  console.log(handelClicked)

  return (
    <div className="card-two"> 
      <p> Fanta!</p>
      <div className="div-btn">
        <button 
          onClick={handelClicked}>
          Water!
        </button>
      </div>
    </div>
  )
}
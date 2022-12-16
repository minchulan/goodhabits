import React from 'react';

const DrugCard = () => {
    return (
      <li className="card">
        <img src={"https://via.placeholder.com/400"} alt={"drug name"} />
        <h4>{"drug name"}</h4>
        <p>{"drug price"}</p>
        {/* { true ? ( <button className="primary">In Stock</button>) : (<button>Out of <Stock></Stock></button>) }
         */}
            
        <div className="details">
          {true ? (
            <button className="emoji-button favorite active">★</button>
          ) : (
            <button className="emoji-button favorite">☆</button>
          )}
          <strong>{"description"}</strong>
          <span> · {"location"}</span>
          <button className="emoji-button delete">🗑</button>
            </div>
            
      </li>
    );
}
 
export default DrugCard;
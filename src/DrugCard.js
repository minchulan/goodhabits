import React from 'react';

const DrugCard = ({ drug, onDeleteDrug }) => {
  const { name, brand, strength, image, form, isFavorite, id } = drug;

  const handleDeleteClick = () => {
    fetch(`htt://localhost:3001/drugs/${id}`, {
      method: "DELETE"
    })
    onDeleteDrug(id)
  }

  const handleFavoriteClick = (favorite) => {}; // "PATCH" request

  //   function handleLikeClick(likes) {
  //   console.log(`this is the id of toy clicked: ${id}`);
  //   fetch(`http://localhost:3001/toys/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ likes: 10 }),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => onHandleLikeClick(data.id, data.likes));
  // }

  return (
    <li className="card">
      <img src={image} alt={name} className="drug-card" />
      <h4>{name} ({brand}) {strength}mg {form}</h4>
      <div className="details">
        {true ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
            <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}
 
export default DrugCard;
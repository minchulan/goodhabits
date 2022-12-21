import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const initialState = {
  name: "",
  brand: "",
  strength: "",
  image: "",
  form: "",
};

const DrugForm = ({ onAddNewDrug }) => {
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const drug = {
      ...formData,
      isFavorite: false,
    };

    fetch("http://localhost:3001/drugs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(drug),
    })
      .then((r) => r.json())
      .then((drug) => {
        onAddNewDrug(drug);
        history.push('/')
        // ^after form is submitted, redirect to homepage
      })
    setFormData(initialState);
  }

  return (
    <div className="drug-form">
      <h2>New Rx Drug</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Generic Name"
          className="input-text"
        />
        <input
          required
          onChange={handleChange}
          value={formData.brand}
          type="text"
          name="brand"
          placeholder="Brand Name"
          className="input-text"
        />
        <input
          required
          onChange={handleChange}
          value={formData.strength}
          type="number"
          step="0.01"
          name="strength"
          placeholder="Strength"
          className="input-text"
        />
        <input
          required
          onChange={handleChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Image URL"
          className="input-text"
        />
        <select required value={formData.form} onChange={handleChange}>
          <option disabled value="none">Choose a drug form</option>
          <option value="tablet">tablet</option>
          <option value="capsule">capsule</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DrugForm;
import React, { useState } from "react";

const initialState = {
  name: "",
  brand: "",
  strength: "",
  image: "",
  form: "",
};

const DrugForm = ({ onAddNewDrug }) => {
  const [formData, setFormData] = useState(initialState);

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
      });

    setFormData(initialState);
  }

  return (
    <div className="drug-form">
      <h2>New Rx Drug</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Generic Name"
          className="input-text"
        />
        <input
          onChange={handleChange}
          value={formData.brand}
          type="text"
          name="brand"
          placeholder="Brand Name"
          className="input-text"
        />
        <input
          onChange={handleChange}
          value={formData.strength}
          type="number"
          step="0.01"
          name="strength"
          placeholder="Strength"
          className="input-text"
        />
        <input
          onChange={handleChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Image URL"
          className="input-text"
        />
        <input
          onChange={handleChange}
          value={formData.form}
          type="text"
          name="form"
          placeholder="Form"
          className="input-text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DrugForm;

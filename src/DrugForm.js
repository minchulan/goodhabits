import React, { useState } from 'react';

const DrugForm = ({ onAddNewDrug }) => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        strength: 0,
        image: "",
        form: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
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
        
      setFormData({
        name: "", 
        brand: "",              
        strength: 0,            
        image: "",            
        form: "",           
      });
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
            value={formData.number}
            type="number"
            name="strength"
            placeholder="Strength"
            className="input-text"
          />
          <input
            onChange={handleChange}
            value={formData.number}
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
}
 
export default DrugForm;
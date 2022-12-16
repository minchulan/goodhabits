import React from 'react';

const DrugForm = () => {
    return (
      <div className="drug-form">
        <h2>New Drug</h2>
        <form>
          <input type="text" name="name" placeholder="Generic name" />
          <input type="text" name="brand" placeholder="Brand name" />
          <input type="number" name="strength" placeholder="Strength" />
          <input type="text" name="form" placeholder="Form" />
          <button type="submit">Add Drug</button>
        </form>
        </div>
    );
}
 
export default DrugForm;
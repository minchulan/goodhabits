import React, { useEffect, useState } from 'react';
import Header from './Header'
import DrugPage from './DrugPage';

function App() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/drugs")
      .then((r) => r.json())
      .then((drugs) => setDrugs(drugs));
  }, []);

  const handleDeleteDrug = (id) => {
    const updatedDrugs = drugs.filter((drug) => drug.id !== id);
    setDrugs(updatedDrugs);
  };

  function handleAddNewDrug(drug) {
    setDrugs([...drugs, drug]);
  }

  return (
    <main className="App">
      <Header />
      <DrugPage drugs={drugs} onAddNewDrug={handleAddNewDrug} onDeleteDrug={handleDeleteDrug} />
    </main>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Header from './Header'
import DrugPage from './DrugPage';

function App() {
  const [drugs, setDrugs] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // function handleToggleDarkMode(isDarkMode) {
  //   setIsDarkMode(isDarkMode)
  // }

  return (
    <main className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <DrugPage drugs={drugs} onAddNewDrug={handleAddNewDrug} onDeleteDrug={handleDeleteDrug} />
    </main>
  );
}

export default App;

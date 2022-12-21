import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import DrugPage from "./DrugPage";
import NavBar from "./NavBar";
import Search from "./Search";
import DrugForm from "./DrugForm";

const App = () => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/drugs")
      .then((r) => r.json())
      .then((drugs) => setDrugs(drugs));
  }, []);

  if (!drugs) return <h2>Loading...</h2>;

  const handleDeleteDrug = (id) => {
    const updatedDrugs = drugs.filter((drug) => drug.id !== id);
    setDrugs(updatedDrugs);
  };

  const handleAddNewDrug = (drug) => {
    setDrugs([drug, ...drugs]);
  }

  return (
    <main className="App">
      <NavBar />
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <DrugPage
              drugs={drugs}
              setDrugs={setDrugs}
              onAddNewDrug={handleAddNewDrug}
              onDeleteDrug={handleDeleteDrug}
            />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/drugs/new">
            <DrugForm />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default App;

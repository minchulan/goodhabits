import React, { useState } from "react";
import DrugForm from "./DrugForm";
import DrugList from "./DrugList";
import Search from "./Search";

const DrugPage = ({
  drugs,
  onAddNewDrug,
  onSearchChange,
  onDeleteDrug,
}) => {
  const [search, setSearch] = useState("");

  const displayedDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <DrugForm onAddNewDrug={onAddNewDrug} />
      <Search search={search} onSearchChange={setSearch} />
      <DrugList
        drugs={displayedDrugs}
        onDeleteDrug={onDeleteDrug}
      />
    </main>
  );
};

export default DrugPage;

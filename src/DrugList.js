import React from "react";
import DrugCard from "./DrugCard";

const DrugList = ({ drugs, onDeleteDrug }) => {
  const drugsToDisplay = drugs.map((drug) => (
    <DrugCard key={drug.id} drug={drug} onDeleteDrug={onDeleteDrug} />
  ));

  return <ul className="drug-list">{drugsToDisplay}</ul>;
};

export default DrugList;

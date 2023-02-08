import { useState } from "react";

const PanelSearch = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState("");
  const handlerChange = (e) => {
    setTerm(e.target.value);
    onUpdateSearch(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handlerChange}
      value={term}
      className={"form-control search-input"}
      placeholder={"Найти сотрудника"}
    />
  );
};

export default PanelSearch;

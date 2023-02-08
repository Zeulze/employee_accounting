import { useState } from "react";
import "./app-filter.css";

const AppFilter = ({ filter, onSetFilter }) => {
  const pressedClass = "btn btn-light";
  const unpressedClass = "btn btn-outline-light";

  const buttonsData = [
    { name: "ALL_USERS", label: "Все сотрудники" },
    { name: "USERS_ON_RISE", label: "На повышение" },
    { name: "RICH_USERS", label: "З/п больше 1200$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? pressedClass : unpressedClass;
    return (
      <button
        type={"button"}
        className={clazz}
        key={name}
        onClick={() => onSetFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className={"btn-group"}>{buttons}</div>;
};

export default AppFilter;

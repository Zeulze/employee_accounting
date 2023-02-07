import { useState } from "react";
import "./empolyee-list-item.css";

const EmployeeListItem = ({
  name,
  salary,
  onDelete,
  onToggle,
  increase,
  rise,
}) => {
  let listClass = "list-group-item justify-content-between d-flex";
  const additionClasses = [" increase ", " like "];

  if (increase) {
    listClass += additionClasses[0];
  }

  if (rise) {
    listClass += additionClasses[1];
  }

  return (
    <li className={listClass}>
      <span
        data-toggle={"increase"}
        onClick={onToggle}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className={"list-group-item-input"}
        defaultValue={salary + "$"}
      />
      <div className={"d-flex justify-content-center align-items-center"}>
        <button
          type={"button"}
          className={"btn-cookie btn-sm"}
          data-toggle={"rise"}
          onClick={onToggle}
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={onDelete}
          type={"button"}
          className={"btn-trash btn-sm"}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-heart"></i>
      </div>
    </li>
  );
};

export default EmployeeListItem;

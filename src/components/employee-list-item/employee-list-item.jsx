import { useState } from "react";
import "./empolyee-list-item.css";

const EmployeeListItem = ({ name, salary, onDelete }) => {
  const [increase, setIncrease] = useState(false);
  const [like, setLike] = useState("");
  const listClass = "list-group-item justify-content-between d-flex";
  const additionClasses = [" increase ", " like "];

  const handleIncrease = () => {
    setIncrease((increase) => !increase);
  };
  const handleLike = () => {
    setLike((like) => {
      return !!like ? "" : additionClasses[1];
    });
  };

  return (
    <li
      className={
        increase ? listClass + additionClasses[0] + like : listClass + like
      }
    >
      <span onClick={handleLike} className="list-group-item-label">
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
          onClick={handleIncrease}
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={(id) => onDelete(id)}
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

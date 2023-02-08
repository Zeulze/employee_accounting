import { useState } from "react";
import "./app-filter.css";

const AppFilter = ({ filters, setFilter }) => {
  const [buttonPressed, setButtonPressed] = useState(filters.ALL_USERS);
  const pressedClass = "btn btn-light";
  const unpressedClass = "btn btn-outline-light";
  const handlerClick = (filter) => {
    setFilter(() => filter);
    setButtonPressed(() => filter);
  };

  return (
    <div className={"btn-group"}>
      <button
        onClick={() => handlerClick(filters.ALL_USERS)}
        className={
          buttonPressed === filters.ALL_USERS ? pressedClass : unpressedClass
        }
        type={"button"}
      >
        Все сотрудники
      </button>
      <button
        onClick={() => handlerClick(filters.USERS_ON_RISE)}
        className={
          buttonPressed === filters.USERS_ON_RISE
            ? pressedClass
            : unpressedClass
        }
        type={"button"}
      >
        На повышение
      </button>
      <button
        onClick={() => handlerClick(filters.RICH_USERS)}
        className={
          buttonPressed === filters.RICH_USERS ? pressedClass : unpressedClass
        }
        type={"button"}
      >
        З/п больше 1200$
      </button>
    </div>
  );
};

export default AppFilter;

import { useState } from "react";
import "./app-filter.css";

const AppFilter = ({ setId }) => {
  const [buttonPressed, setButtonPressed] = useState(1);
  const pressedClass = "btn btn-light";
  const unpressedClass = "btn btn-outline-light";
  const handlerClick = (id) => {
    setId(() => id);
    setButtonPressed(() => id);
  };

  return (
    <div className={"btn-group"}>
      <button
        onClick={() => handlerClick(1)}
        className={buttonPressed === 1 ? pressedClass : unpressedClass}
        type={"button"}
      >
        Все сотрудники
      </button>
      <button
        onClick={() => handlerClick(2)}
        className={buttonPressed === 2 ? pressedClass : unpressedClass}
        type={"button"}
      >
        На повышение
      </button>
      <button
        onClick={() => handlerClick(3)}
        className={buttonPressed === 3 ? pressedClass : unpressedClass}
        type={"button"}
      >
        З/п больше 1200$
      </button>
    </div>
  );
};

export default AppFilter;

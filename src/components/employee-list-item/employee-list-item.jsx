import "./empolyee-list-item.css";

const EmployeeListItem = () => {
  return (
    <li className={"list-group-item justify-content-between d-flex"}>
      <span className="list-group-item-label">Ivan Ivanovich</span>
      <input
        type="text"
        className={"list-group-item-input"}
        defaultValue={"500$"}
      />
      <div className={"d-flex justify-content-center align-items-center"}>
        <button type={"button"} className={"btn-cookie btn-sm"}>
          <i className="fas fa-check"></i>
        </button>
        <button type={"button"} className={"btn-trash btn-sm"}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-heart"></i>
      </div>
    </li>
  );
};

export default EmployeeListItem;

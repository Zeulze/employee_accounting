import { useState } from "react";
import "./employee-add-form.css";

const EmployeeAddForm = ({ onUpdate }) => {
  const [employee, setEmployee] = useState({ name: "", salary: "" });

  const handleChange = (e) => {
    setEmployee((employee) => ({
      ...employee,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name.length > 2 && !!employee.salary) {
      onUpdate(employee.name, employee.salary);
      setEmployee(() => ({ name: "", salary: "" }));
    }
  };

  return (
    <div className={"app-add-form"}>
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={(e) => handleSubmit(e)} className={"add-form d-flex"}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name={"name"}
          value={employee.name}
          className={"form-control new-post-label"}
          placeholder={"Как его зовут?"}
        />
        <input
          onChange={(e) => handleChange(e)}
          type={"number"}
          name={"salary"}
          value={employee.salary}
          className={"form-control new-post-label"}
          placeholder={"З/П в $?"}
        />
        <button type={"submit"} className={"btn btn-outline-light"}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeeAddForm;

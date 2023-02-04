import EmployeeListItem from "../employee-list-item/employee-list-item.jsx";
import "./employee-list.css";

const EmployeeList = () => {
  return (
    <ul className={"app-list list-group"}>
      <EmployeeListItem />
      <EmployeeListItem />
    </ul>
  );
};

export default EmployeeList;

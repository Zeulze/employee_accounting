import EmployeeListItem from "../employee-list-item/employee-list-item.jsx";
import "./employee-list.css";

const EmployeeList = ({ data }) => {
  const listItems = data.map((employee) => {
    const { id, ...employeeProps } = employee;

    return <EmployeeListItem key={id} {...employeeProps} />;
  });
  return <ul className={"app-list list-group"}>{listItems}</ul>;
};

export default EmployeeList;

import EmployeeListItem from "../employee-list-item/employee-list-item.jsx";
import "./employee-list.css";

const EmployeeList = ({ data, onDelete, onToggle }) => {
  const listItems = data.map((employee) => {
    const { id, ...employeeProps } = employee;

    return (
      <EmployeeListItem
        key={id}
        {...employeeProps}
        onDelete={() => onDelete(id)}
        onToggle={(e) =>
          onToggle(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  return <ul className={"app-list list-group"}>{listItems}</ul>;
};

export default EmployeeList;

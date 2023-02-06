import { useState } from "react";
import AppInfo from "../app-info/app-info.jsx";
import PanelSearch from "../panel-search/panel-search.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import EmployeeList from "../employee-list/employee-list.jsx";
import EmployeeAddForm from "../employee-add-form/employee-add-form.jsx";
import "./app.css";
import "../panel-search/panel-search.css";

const App = () => {
  const [maxId, setMaxId] = useState(3);
  const [data, setData] = useState([
    { name: "Anton Mamon", salary: 3000, id: 1 },
    { name: "Sargeras", salary: 300, id: 2 },
    { name: "Illidan yarost buri", salary: 1200, id: 3 },
  ]);

  const onDelete = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const onUpdate = (name, salary) => {
    setData((data) => {
      return [...data, { name: name, salary: salary, id: maxId + 1 }];
    });
    setMaxId((maxId) => maxId + 1);
  };

  return (
    <div className={"app"}>
      <AppInfo />
      <div className="panel-search">
        <PanelSearch />
        <AppFilter />
      </div>
      <EmployeeList data={data} onDelete={onDelete} />
      <EmployeeAddForm onUpdate={onUpdate} />
    </div>
  );
};

export default App;

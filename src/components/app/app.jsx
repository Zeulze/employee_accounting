import "./app.css";
import "../panel-search/panel-search.css";
import AppInfo from "../app-info/app-info.jsx";
import PanelSearch from "../panel-search/panel-search.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import EmployeeList from "../employee-list/employee-list.jsx";
import EmployeeAddForm from "../employee-add-form/employee-add-form.jsx";

const App = () => {
  const data = [
    { name: "Anton Mamon", salary: 3000, increase: true, id: 1 },
    { name: "Sargeras", salary: 300, increase: true, id: 2 },
    { name: "Illidan yarost buri", salary: 1200, increase: false, id: 3 },
  ];
  return (
    <div className={"app"}>
      <AppInfo />
      <div className="panel-search">
        <PanelSearch />
        <AppFilter />
      </div>
      <EmployeeList data={data} />
      <EmployeeAddForm />
    </div>
  );
};

export default App;

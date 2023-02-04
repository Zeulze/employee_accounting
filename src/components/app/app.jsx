import "./app.css";
import "../panel-search/panel-search.css";
import AppInfo from "../app-info/app-info.jsx";
import PanelSearch from "../panel-search/panel-search.jsx";
import AppFilter from "../app-filter/app-filter.jsx";
import EmployeeList from "../employee-list/employee-list.jsx";
import EmployeeAddForm from "../employee-add-form/employee-add-form.jsx";

const App = () => {
  return (
    <div className={"app"}>
      <AppInfo />

      <div className="panel-search">
        <PanelSearch />
        <AppFilter />
      </div>
      <EmployeeList />
      <EmployeeAddForm />
    </div>
  );
};

export default App;

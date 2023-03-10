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
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("ALL_USERS");
  const [data, setData] = useState([
    { name: "Anton Mamon", salary: 3000, rise: false, increase: false, id: 1 },
    { name: "Sargeras", salary: 300, rise: true, increase: false, id: 2 },
    {
      name: "Illidan yarost buri",
      salary: 1200,
      rise: false,
      increase: true,
      id: 3,
    },
  ]);

  const onDelete = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const onUpdate = (name, salary) => {
    setData((data) => {
      return [
        ...data,
        {
          name: name,
          salary: salary,
          increase: false,
          rise: false,
          id: maxId + 1,
        },
      ];
    });
    setMaxId((maxId) => maxId + 1);
  };

  const onToggle = (id, param) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) return { ...item, [param]: !item[param] };
        return item;
      })
    );
  };

  const searchUser = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(
      (item) =>
        item.name.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1
    );
  };

  const toFilterData = (filter) => {
    switch (filter) {
      case "ALL_USERS":
        return searchUser(data, term);
      case "USERS_ON_RISE":
        return searchUser(
          data.filter((item) => item.increase),
          term
        );
      case "RICH_USERS":
        return searchUser(
          data.filter((item) => item.salary > 1200),
          term
        );
    }
  };

  const visibleData = toFilterData(filter);

  const onUpdateSearch = (term) => {
    setTerm(() => term);
  };

  const onSetFilter = (filter) => {
    setFilter(() => filter);
  };

  return (
    <div className={"app"}>
      <AppInfo
        numberPeople={data.length}
        checkIncrease={data.filter((item) => item.increase).length}
      />
      <div className="panel-search">
        <PanelSearch onUpdateSearch={onUpdateSearch} />
        <AppFilter onSetFilter={onSetFilter} filter={filter} />
      </div>
      <EmployeeList
        data={visibleData}
        onDelete={onDelete}
        onToggle={onToggle}
      />
      <EmployeeAddForm onUpdate={onUpdate} />
    </div>
  );
};

export default App;

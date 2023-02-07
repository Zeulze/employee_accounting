import "./app-info.css";

const AppInfo = ({ numberPeople, checkIncrease }) => {
  return (
    <div className={"app-info"}>
      <h1>Учет сотрудников в компании "Company Name"</h1>
      <h2>Общее число сотрудников: {numberPeople}</h2>
      <h2>Премию получат: {checkIncrease}</h2>
    </div>
  );
};

export default AppInfo;

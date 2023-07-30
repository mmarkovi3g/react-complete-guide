import "./ExpenseDate.css";

//ovdje smo kreirali jednostavnu komponentu koja oblikuje format vremena da bude u skladu s željenim vizualnim rezultatom
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("hr-eu", { month: "long" });
  const year = props.date.toLocaleString("en-us", { year: "numeric" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;

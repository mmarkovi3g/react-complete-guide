import "./ExpenseItem.css";

function ExpenseItem(props) {
  //react komponente uvijek uzimaju samo jedan argument - najčešće se zove PROPS

  const month = props.date.toLocaleString("hr-eu", { month: "long" });
  const year = props.date.toLocaleString("en-us", { year: "numeric" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
} //podatke iz objekata koje smo kreirali u app.js zatim povezujemo unutar naše komponente
// i to na sljedeći način {props.nazivAtributa}

export default ExpenseItem;

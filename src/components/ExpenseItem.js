import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  //react komponente uvijek uzimaju samo jedan argument - najčešće se zove PROPS

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
} //podatke iz objekata koje smo kreirali u app.js zatim povezujemo unutar naše komponente
// i to na sljedeći način {props.nazivAtributa}

export default ExpenseItem;

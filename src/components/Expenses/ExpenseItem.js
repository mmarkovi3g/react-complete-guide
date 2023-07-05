import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //react komponente uvijek uzimaju samo jedan argument - najčešće se zove PROPS
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Evo ovo radi!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}; //podatke iz objekata koje smo kreirali u app.js zatim povezujemo unutar naše komponente
// i to na sljedeći način {props.nazivAtributa}

export default ExpenseItem;

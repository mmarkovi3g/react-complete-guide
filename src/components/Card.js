import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //kako bi se vlastita komponenta mogla koristiti kao kontejner potrebno je uključiti i nasljeđivanje klasa (na ovaj način)
  return <div className={classes}>{props.children}</div>;
} // također je potrebno dodati i sljedeće atribute a posebno props.children kako bi se klasa prenijela na sve elemente

export default Card;

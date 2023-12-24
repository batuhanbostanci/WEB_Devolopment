import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="container">
      <h1>React Pizza Menu</h1>
    </div>
  );
}

function Headers() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <div>
        <h1>Fast Tacko Pizza Co.</h1>
      </div>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0 ? (
        <React.Fragment key="keyOfTheFirstragment">
          <p>Authentic Italian Pizza made with love and passion</p>

          <ul className="pizzas">
            {" "}
            {pizzaData.map((item) => {
              return (
                <Pizza
                  name={item.name}
                  ingredients={item.ingredients}
                  photoName={item.photoName}
                  price={item.price}
                  soldOut={item.soldOut}
                />
              );
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later</p>
      )}
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Soory we're closed");
  //   console.log(hour);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <h3>We are currently closed</h3>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      {" "}
      <h3>
        We are open until {props.closeHour}:00. Come visit us or order online
      </h3>
      <button className="btn">Order Online</button>
    </div>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <ul className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} width="200" height="200" />
      <ul>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </ul>
    </ul>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Headers />
      <App />
      <Menu />
      <Footer />
    </div>
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

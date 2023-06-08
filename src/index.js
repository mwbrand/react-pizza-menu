import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Data
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

// Components
function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = "";
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Six creative dishes to choose from. All
            from our stone oven, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 20;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;

  // if (hour >= openingHour && hour <= closingHour) alert("We're currently open!");
  // else alert("Sorry... We're closed.");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openingHour={openingHour} closingHour={closingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ openingHour, closingHour }) {
  return (
    <div className="order">
      <p>
        We're currently open from {openingHour}:00 until {closingHour}:00. Come
        visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// App
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//  React before version 18.
//  React.render(<App />, document.getElementById("root"));

//  React version 18.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

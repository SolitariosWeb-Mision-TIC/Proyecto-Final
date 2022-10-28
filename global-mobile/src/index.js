import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ProductsClient from "./views/Products/productsClient";
import SalesList from "./views/Products/salesList";

const App = () => {
  return (
    <div>
      <SalesList />
    </div>
  );
};
const root = document.getElementById("root");
// Parametro 1 elemento a montar
// Parametro 2 elemento donde se va a injectar
ReactDOM.render(<App />, root);

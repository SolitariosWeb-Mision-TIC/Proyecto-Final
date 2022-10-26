import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ProductsClient from "./views/Products/productsClient";

const App = () => {
  return (
    <div>
      <ProductsClient />
    </div>
  );
};
const root = document.getElementById("root");
// Parametro 1 elemento a montar
// Parametro 2 elemento donde se va a injectar
ReactDOM.render(<App />, root);

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CreateProducts from "../views/Products/create";
import ProductsClient from "../views/Products/productsClient";
import SalesList from "../views/Products/salesList";
import NavBar from '../components/layout/NavBar';
import Home from "../views/home";
import Products from "../views/Products/Products";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create"  element={<CreateProducts />} />
          <Route path="/edit"  element={<Products />} />
          <Route path="/compras" element={<ProductsClient />} />
          <Route path="/ventas" element={<SalesList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

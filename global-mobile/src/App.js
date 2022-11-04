import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CreateProducts from "./views/Products/create";
import ProductsClient from "./views/Products/productsClient";
import SalesList from "./views/Products/salesList";
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/create" exact element={<CreateProducts />} />
          <Route path="/" element={<ProductsClient />} />
          <Route path="/ventas" element={<SalesList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

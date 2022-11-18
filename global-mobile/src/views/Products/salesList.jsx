import React, { useEffect, useState } from "react";

const SalesList = () => {
  
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [sales, setSales] = useState([]);

  const cargarDatos = () => {
    fetch('http://localhost:1234/api/store/buy')
      .then(res => res.json())
      .then(sales => { setSales(sales) })
  };

  useEffect(() => {
    cargarDatos()
  }, [])

  const viewList = (sale, index) => {

    return (
      <tr key={index}>
        <td> {sale.date} </td>
        <td> {sale.products.length} </td>
        <td> {formatter.format(sale.total)} </td>
      </tr>
    );
  };

  return (
    sales.length > 0 ? (

    <div>
      <div className="container">
        <h1 className="text-center mt-3 text-muted">Lista de Ventas</h1>
      </div>
      <br />
      <div className="container">
        <div className="mb-3">
          <table class="table table-bordered text-center">
            <thead class="table-dark">
              <tr>
                <th scope="col">FECHA</th>
                <th scope="col">PRODUCTOS</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>

            <tbody class="table-striped table-hover">
              {sales.map(viewList)}
            </tbody>

          </table>
        </div>
      </div>
    </div>
    ):(
      <div className="container">
        <h1 className="text-center mt-3 text-muted">No hay ventas</h1>
      </div>
    )
  );
};

export default SalesList;
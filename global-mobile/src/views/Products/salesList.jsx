import React, { useEffect, useState } from "react";

const SalesList = () => {
  const productos = [
    { id: 1, name: "Xiaomi", fecha: "28/10/2022", descripcion: "Test 1", valor: 500000 },
    { id: 2, name: "Samsung", fecha: "28/10/2022", descripcion: "Test 2", valor: 600000 },
    { id: 3, name: "Motorola", fecha: "28/10/2022", descripcion: "Test 3", valor: 800000 },
    { id: 5, name: "Oppo", fecha: "28/10/2022", descripcion: "Test 3", valor: 550000 },
    { id: 6, name: "Xperia", fecha: "28/10/2022", descripcion: "Test 3", valor: 620000 },
    { id: 7, name: "Redmi 9", fecha: "28/10/2022", descripcion: "Test 3", valor: 580000 },
    { id: 8, name: "Redmi 10", fecha: "28/10/2022", descripcion: "Test 3", valor: 570000 },
    { id: 9, name: "Xiaomi2", fecha: "28/10/2022", descripcion: "Test 1", valor: 620000 },
    { id: 11, name: "Xiaomi4", fecha: "28/10/2022", descripcion: "Test 1", valor: 350000 },
    { id: 12, name: "Samsung", fecha: "28/10/2022", descripcion: "Test 2", valor: 590000 },
    { id: 13, name: "Motorola", fecha: "28/10/2022", descripcion: "Test 3", valor: 800000 },

  ];

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [sales, setSales] = useState([]);

  const cargarDatos = () => {
    fetch('http://localhost:1234/api/store')
      .then(res => res.json())
      .then(products => { setSales(sales) })
  };

  useEffect(() => {
    cargarDatos()
  }, [])

  const viewList = (producto, index) => {


    return (
      <tr key={index}>
        <td> {producto.id} </td>
        <td> {producto.name} </td>
        <td> {producto.descripcion} </td>
        <td> {producto.fecha} </td>
        <td> {formatter.format(producto.valor)} </td>
      </tr>
    );
  };

  return (
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
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Fecha de venta</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>

            <tbody class="table-striped table-hover">
              {productos.map(viewList)}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesList;
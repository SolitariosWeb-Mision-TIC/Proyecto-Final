import React, { useEffect } from "react";
import { useState } from "react";

const EditProducts= () => {

  const [products, setProducts] = useState([])

  const   cargarDatos =() => {
    fetch('http://localhost:1234/api/products')
    .then(res => res.json())
    .then(products => {setProducts(products)})
    
  };

  useEffect (() => {
    cargarDatos()
}, [])

    return (
      <div>
        <div className="container">
          <h1>PRODUCTOS</h1>
        </div>
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="productoNombre"
              onChange={(e) => this.changeNombre(e.target.value)}
            ></input>
            <div id="nombreHelp" className="form-text">
              Nombre del producto
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="productoDescripcion"
              onChange={(e) => this.changeDescripcion(e.target.value)}
            ></input>
            <div id="descripcionHelp" className="form-text">
              Descripcion del producto
            </div>
          </div>

          <button  className="btn btn-primary">
            Crear Producto
          </button>
        </div>
        <br />
        <div className="container">
          {products.map((product, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
export default EditProducts;

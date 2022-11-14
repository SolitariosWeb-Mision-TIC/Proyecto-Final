import React, { useEffect, useState } from "react";

const ProductsClient = () => {
  const [products, setProducts] = useState([]);
  const cargarDatos = () => {
    fetch('http://localhost:1234/api/store', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
        .then(res => res.json())
        .then(products => { setProducts(products) })
};

useEffect(() => {
    cargarDatos()
}, [])



  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const oprimio = (producto) => {
    if (carrito.includes(producto)) {
      setCarrito(carrito.filter((item) => item !== producto));
    } else {
      agregarCarrito(producto);
    }
  };

  const totalCarro = (carrito) => {
    let total = 0;
    carrito.forEach((element) => {
      total += element.valor;
    });
    return total;
  };

    const vaciarCarro = ()  => {
      setCarrito([]);
    }
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <h1 className="text-center mt-3 text-muted">Productos en venta</h1>
      <br />
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row">
              {products.map((producto, index) => {
                return (
                  <div key={producto.id} className="col-12 col-md-6 col-lg-4">
                    <div className="card mb-4 shadow-sm">
                      <img
                        className="card-img-top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZVbcygH3QZNKGOOqgAN9WRQedPmX_8LpjA&usqp=CAU"
                        alt="Celular"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {producto.name}
                        </h5>
                        <p className="card-text text-center">
                          {producto.descripcion}
                        </p>
                        <p className="card-text text-center">
                          {formatter.format(producto.valor)}
                        </p>
                        <div className="text-center">
                          <a
                            href="#a"
                            className={
                              carrito.includes(producto)
                                ? "btn btn-danger"
                                : "btn btn-primary"
                            }
                            name="elemento"
                            onClick={() => oprimio(producto)}
                          >
                            {carrito.includes(producto)
                              ? "Eliminar"
                              : "Agregar"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card border-secondary mb-3 rounded shadow-lg sticky-top">
              <div className="card-body text-secondary text-center">
                <h5 className="card-title">Carrito</h5>
                <table class="table table-sm overflow-auto card-text">
                  <thead>
                    <tr className="text-muted overflow-auto">
                      <th >Nombre</th>
                      <th >Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((productCart) => {
                      return (
                        <tr className="card-text">
                          <td>{productCart.name}</td>
                          <td>{formatter.format(productCart.valor)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <p className="card-footer">
                  Total {formatter.format(totalCarro(carrito))}
                </p>
                <a
                  href="#a"
                  className={"btn btn-outline-success mx-2 my-2 py-1"}
                  name="elemento"

                >
                  {"Pagar"}
                </a>
                <a
                  href="#a"
                  className={"btn btn-outline-danger mr-3  py-1"}
                  name="elemento"
                  onClick={vaciarCarro}
                >
                  {"Limpiar"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsClient;

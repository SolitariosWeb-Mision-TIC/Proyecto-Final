import React, { useState } from "react";

const productos = [
  { id: 1, name: "Xiaomi", descripcion: "Test 1", valor: 500000 },
  { id: 2, name: "Samsung", descripcion: "Test 2", valor: 600000 },
  { id: 3, name: "Motorola", descripcion: "Test 3", valor: 800000 },
  { id: 4, name: "Huwei", descripcion: "Test 3", valor: 450000 },
  { id: 5, name: "Oppo", descripcion: "Test 3", valor: 550000 },
  { id: 6, name: "Xperia", descripcion: "Test 3", valor: 620000 },
  { id: 7, name: "Redmi 9", descripcion: "Test 3", valor: 580000 },
  { id: 8, name: "Redmi 10", descripcion: "Test 3", valor: 570000 },
  { id: 9, name: "Xiaomi2", descripcion: "Test 1", valor: 620000 },
  { id: 10, name: "Xiaomi3", descripcion: "Test 1", valor: 300000 },
  { id: 11, name: "Xiaomi4", descripcion: "Test 1", valor: 350000 },
  { id: 12, name: "Samsung", descripcion: "Test 2", valor: 590000 },
  { id: 13, name: "Motorola", descripcion: "Test 3", valor: 800000 },
  { id: 14, name: "Huwei", descripcion: "Test 3", valor: 560000 },
  { id: 15, name: "Oppo", descripcion: "Test 3", valor: 720000 },
  { id: 16, name: "Xperia", descripcion: "Test 3", valor: 6500000 },
  { id: 17, name: "Redmi 9", descripcion: "Test 3", valor: 4200000 },
  { id: 18, name: "Redmi 10", descripcion: "Test 3", valor: 810000 },
];

const ProductsClient = () => {
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
              {productos.map((producto, index) => {
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
            <div className="card border-secondary mb-3 rounded shadow-lg">
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

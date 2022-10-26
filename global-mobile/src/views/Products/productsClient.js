import React, { useState } from "react";

const productos = [
  { id: 1, name: "Xiaomi", descripcion: "Test 1" },
  { id: 2, name: "Samsung", descripcion: "Test 2" },
  { id: 3, name: "Motorola", descripcion: "Test 3" },
  { id: 4, name: "Huwei", descripcion: "Test 3" },
  { id: 5, name: "Oppo", descripcion: "Test 3" },
  { id: 6, name: "Xperia", descripcion: "Test 3" },
  { id: 7, name: "Redmi 9", descripcion: "Test 3" },
  { id: 8, name: "Redmi 10", descripcion: "Test 3" },
  { id: 9, name: "Xiaomi2", descripcion: "Test 1" },
  { id: 10, name: "Xiaomi3", descripcion: "Test 1" },
  { id: 11, name: "Xiaomi4", descripcion: "Test 1" },
  { id: 12, name: "Samsung", descripcion: "Test 2" },
  { id: 13, name: "Motorola", descripcion: "Test 3" },
  { id: 14, name: "Huwei", descripcion: "Test 3" },
  { id: 15, name: "Oppo", descripcion: "Test 3" },
  { id: 16, name: "Xperia", descripcion: "Test 3" },
  { id: 17, name: "Redmi 9", descripcion: "Test 3" },
  { id: 18, name: "Redmi 10", descripcion: "Test 3" },
];

const ProductsClient = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    console.log(producto.name);
    setCarrito([...carrito, producto]);
  };

  const cambiarBoton = (oprimido) => {
    if (oprimido) {
      var className = 'btn';
      className += 'btn-primary';
    } else {
      className += 'btn-danger';
    }
  }

  const [oprimido, setOprimido] = useState(false);
  const oprimio = (producto) => {
    agregarCarrito(producto)
    setOprimido(!oprimido)
    cambiarBoton(oprimido)
  }

  return (
    <>
      <h1 className="text-center mt-3">Productos</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {productos.map((producto, index) => {
                return (
                  <div className="col-3">
                    <div className="card mb-4" key={index}>
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
                        <div className="text-center">
                          <a
                            href="#a"
                            class="btn btn-primary"
                            name="elemento"
                            onClick={() => oprimio(producto)}
                          >
                            {oprimido ? "Agregar" : "Eliminar"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="col-3 card border-secondary mb-3">
            <div class="card-body text-secondary text-center">
              <h5 class="card-title">Carrito</h5>
              <p class="card-text">
                {carrito.map((productCart) => {
                  return <p>{productCart.name}</p>;
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsClient;

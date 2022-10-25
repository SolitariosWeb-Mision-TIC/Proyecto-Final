import React from "react";

class CreateProducts extends React.Component {
  constructor() {
    super();

    const METHODS = ["agregar", "changeNombre", "changeDescripcion"];

    METHODS.forEach((elemento) => {
      this[elemento] = this[elemento].bind(this);
    });

    this.state = {
      nombre: "",
      descripcion: "",
      productos: [
        { id: 1, name: "Xiaomi", descripcion: "Test 1" },
        { id: 2, name: "Samsung", descripcion: "Test 2" },
        { id: 3, name: "Motorola", descripcion: "Test 3" },
      ],
    };
  }

  agregar() {
    let data = this.state.productos;
    data.push({
      id: this.state.productos.length + 1,
      name: this.state.nombre,
      descripcion: this.state.descripcion,
    });

    this.setState({
      productos: data,
    });
  }

  changeNombre(value) {
    this.setState({
      nombre: value,
    });
  }
  changeDescripcion(value) {
    this.setState({
      descripcion: value,
    });
  }

  render() {
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
              value={this.state.nombre}
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
              value={this.state.descripcion}
              onChange={(e) => this.changeDescripcion(e.target.value)}
            ></input>
            <div id="descripcionHelp" className="form-text">
              Descripcion del producto
            </div>
          </div>

          <button onClick={this.agregar} className="btn btn-primary">
            Crear Producto
          </button>
        </div>
        <br />
        <div className="container">
          {this.state.productos.map((producto, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CreateProducts;

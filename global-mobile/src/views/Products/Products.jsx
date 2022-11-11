import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import EditProducts from "../../components/editProducts";

const Products = (props) => {

    const { register, errors, handleSubmit } = useForm();
    const [products, setProducts] = useState([]);
    const [productoNombre, setProductoNombre] = useState();
    const [productoDescripcion, setProductoDescripcion] = useState();
    const [productoValor, setProductoValor] = useState();




    const cargarDatos = () => {
        fetch('http://localhost:1234/api/products')
            .then(res => res.json())
            .then(products => { setProducts(products) })
    };

    useEffect(() => {
        cargarDatos()
    }, [])

    return (
        <div>
            <div className="container">
                <h1>PRODUCTOS</h1>
            </div>
            <EditProducts />
            <br/>
            <div className="container">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.descripcion}</p>
                                <p className="card-text">{product.valor}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Products;

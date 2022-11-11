import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'

const EditProducts = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [products, setProducts] = useState([]);
    const [productoNombre, setProductoNombre] = useState();
    const [productoDescripcion, setProductoDescripcion] = useState();
    const [productoValor, setProductoValor] = useState();


    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
        props.addUser(data);
    }

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
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="productoNombre"
                            onChange={e => setProductoNombre(e.target.value)}
                            {...register("productoNombre", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                        <div>
                            {errors?.productoNombre?.message}
                        </div>
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
                            onChange={e => setProductoDescripcion(e.target.value)}
                            {...register("productoDescripcion", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                         <div>
                            {errors?.productoDescripcion?.message}
                        </div>
                        <div id="DescripcioneHelp" className="form-text">
                            Descripcion del producto
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Valor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="productoValor"
                            onChange={e => setProductoValor(e.target.value)}
                            {...register("productoValor", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                         <div>
                            {errors?.productoValor?.message}
                        </div>
                        <div id="ValorHelp" className="form-text">
                            Valor del producto
                        </div>
                    </div>
                    <button className="btn btn-primary">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
}
export default EditProducts;

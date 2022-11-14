import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateProducts = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [nombre, setNombre] = useState();
    const [descripcion, setDescripcion] = useState();
    const [stock, setStock] = useState();
    const [valor, setValor] = useState();


    const onSubmit = (data, e) => {
        props.addProducts(data);
        e.target.reset();
    }

    return (
        <div>
            <div className="container">
                <h1>Crear Producto</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="productoNombre"
                            onChange={e => setNombre(e.target.value)}
                            {...register("name", {
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
                            onChange={e => setDescripcion(e.target.value)}
                            {...register("descripcion", {
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
                        <label className="form-label">Stock</label>
                        <input
                            type="number"
                            className="form-control"
                            id="productoDescripcion"
                            onChange={e => setStock(e.target.value)}
                            {...register("stock", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                        <div>
                            {errors?.productoDescripcion?.message}
                        </div>
                        <div id="DescripcioneHelp" className="form-text">
                            Stock del producto
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Valor</label>
                        <input
                            type="number"
                            className="form-control"
                            id="productoValor"
                            onChange={e => setValor(e.target.value)}
                            {...register("valor", {
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
export default CreateProducts;
import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'

const EditProducts = (props) => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: props.currenProducts
    });

    setValue('name', props.currenProducts.name)
    setValue('descripcion', props.currenProducts.descripcion)
    setValue('stock', props.currenProducts.stock)
    setValue('valor', props.currenProducts.valor)

    const [nombre, setNombre] = useState();
    const [descripcion, setDescripcion] = useState();
    const [stock, setStock] = useState();
    const [valor, setValor] = useState();


    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currenProducts._id
        props.updateProducts(props.currenProducts._id, data)
        e.target.reset();
    }

    return (
        <div>
            <div className="container">
                <h1>Editar Producto</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3 mt-3">
                        <div>
                            {errors?.name?.message}
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder='Nombre del producto'
                            onChange={e => setNombre(e.target.value)}
                            {...register("name", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                    </div>
                    <div className="my-3">
                        <div>
                            {errors?.descripcion?.message}
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            placeholder='Descripcion del producto'
                            onChange={e => setDescripcion(e.target.value)}
                            {...register("descripcion", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                    </div>
                    <div className="my-3">
                        <div>
                            {errors?.stock?.message}
                        </div>
                        <input
                            type="Number"
                            className="form-control"
                            name="stock"
                            placeholder='Stock del producto'
                            onChange={e => setStock(e.target.value)}
                            {...register("stock", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                    </div>
                    <div className="my-3">
                        <div>
                            {errors?.valor?.message}
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name="valor"
                            placeholder='Valor del producto'
                            onChange={e => setValor(e.target.value)}
                            {...register("valor", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                    </div>
                    <button className="btn btn-primary" onClick={() => (props.cargarDatos())}>
                        Editar
                    </button>
                </form>
            </div>
        </div>
    );
}
export default EditProducts;

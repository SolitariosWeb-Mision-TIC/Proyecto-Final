import React from 'react';
import { useState } from 'react';




const ListTrolley = (props) => {

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

    const obtenerIds = (carrito) =>{
        const ids = [];
        carrito.forEach(element => {
            ids.push(element.id);
        });
        return ids;
    }

    return (
        <>
            <div className="m-3">
                <table className="table table-striped text-center">
                    <thead className="navBar text-white">
                        <tr>
                            <th scope="col">Articulo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.carrito.map((product) => {
                            return (
                                <tr>
                                    <th>{product.name}</th>
                                    <th>{product.descripcion}</th>
                                    <th>{formatter.format(product.valor)}</th>
                                </tr>
                            );
                        })}
                        <tr className="table-info">
                            <th>Total</th>
                            <th></th>
                            <th>{formatter.format(props.totalCarro(props.carrito))}</th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>
                            <a
                      href="#0"
                      className={"btn btn-outline-success mx-2 my-2 py-1"}
                      name="elemento"
                      onClick={() => props.restarStock(obtenerIds(props.carrito))}
                    >
                      "Pagar"
                    </a>
                    <a
                      href="#0"
                      className={"btn btn-outline-danger mr-3  py-1"}
                      name="elemento"
                      onClick={() => props.vaciarCarro()}
                    >
                      "Limpiar"
                    </a>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default ListTrolley;
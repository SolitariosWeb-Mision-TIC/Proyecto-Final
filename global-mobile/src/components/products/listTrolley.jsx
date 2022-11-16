import React from 'react';


const ListTrolley = (props) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

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
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListTrolley;
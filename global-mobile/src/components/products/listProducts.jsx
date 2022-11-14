import React from 'react';

const ListProducts = (props) => {

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-8 col-lg-12">
                    <div className="row">
                        {props.products.map((product) => {
                            return (
                                <div key={product._id} className="col-12 col-md-6 col-lg-3">
                                    <div className="card mb-4 shadow-sm">
                                        <img
                                            className="card-img-top"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZVbcygH3QZNKGOOqgAN9WRQedPmX_8LpjA&usqp=CAU"
                                            alt="Celular"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">
                                                {product.name}
                                            </h5>
                                            <p className="card-text text-center">
                                                {product.descripcion}
                                            </p>
                                            <p className="card-text text-center">
                                                {formatter.format(product.valor)}
                                            </p>
                                            <p className="card-text text-center">
                                                {product.stock}
                                            </p>
                                            <div className="text-center">
                                                <a className='btn btn-warning mx-1' href="#" onClick={() => { props.editProducts(product) }}>Editar</a>
                                                <button className='btn btn-danger' onClick={() => { props.deleteProducts(product.id) }}>Borrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProducts;
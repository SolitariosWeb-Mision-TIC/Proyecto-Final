import React from 'react';

const ListProducts = (props) => {
   

    return (
        <div className="container">
            {props.products.map((product) => {
                return (
                    <div key={product.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.descripcion}</p>
                            <p className="card-text">{product.valor}</p>
                            <button className='btn btn-warning mx-1' onClick={() => {props.editProducts(product)}}>Editar</button>
                            <button className='btn btn-danger' onClick={() => {props.deleteProducts(product.id)}}>Borrar</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListProducts;
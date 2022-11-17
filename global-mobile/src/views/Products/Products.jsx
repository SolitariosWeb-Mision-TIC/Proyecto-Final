import React, { useEffect, useState } from "react";
import CreateProducts from "../../components/products/createProducts";
import EditProducts from "../../components/products/editProducts";
import ListProducts from "../../components/products/listProducts";

const Products = () => {


    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currenProducts, setCurrenProducts] = useState({
        _id: null,
        name: "",
        descripcion: "",
        stock: "",
        valor: ""
    })

    const cargarDatos = () => {
        fetch('http://localhost:1234/api/store')
            .then(res => res.json())
            .then(products => { setProducts(products) })
    };

    useEffect(() => {
        cargarDatos()
    }, [])

    const addProducts = async (product) => {
        fetch(`http://localhost:1234/api/store`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())

    }

    const deleteProducts = (id) => {
        fetch(`http://localhost:1234/api/store/${id}`, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-type": "application/json; charset=UTF-8",
            }

        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }

    const updateProducts = (id, updateProducts) => {
        setEditing(false)
        fetch(`http://localhost:1234/api/store/${id}`, {
            method: 'put',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(updateProducts),
        })
            .then(res => res.json())
    }
    const editProducts = (products) => {
        setEditing(true)
        setCurrenProducts({
            _id: products._id,
            name: products.name,
            descripcion: products.descripcion,
            stock: products.stock,
            valor: products.valor
        })
    }
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-8 col-lg-8 mt-2">
                        <ListProducts products={products} deleteProducts={deleteProducts} editProducts={editProducts} />
                    </div>
                    <br />
                    <div className="col-12 col-md-8 col-lg-4">
                        <div className="sticky-top mt-2" >
                            {
                                editing ? (
                                    <EditProducts
                                        currenProducts={currenProducts}
                                        updateProducts={updateProducts}
                                        cargarDatos={cargarDatos}
                                    />
                                ) : (
                                    <CreateProducts
                                        addProducts={addProducts}
                                        cargarDatos={cargarDatos}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Products;

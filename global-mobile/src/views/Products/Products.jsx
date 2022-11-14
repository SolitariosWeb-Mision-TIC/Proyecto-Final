import React, { useEffect, useState } from "react";
import CreateProducts from "../../components/products/createProducts";
import EditProducts from "../../components/products/editProducts";
import ListProducts from "../../components/products/listProducts";

const Products = (props) => {

    const addProducts = async (product) => {
        const data2 = await fetch(`http://localhost:1234/api/store`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        
    }

    const deleteProducts = (id) => {
        //eliminamos en Api
    }

    const updateProducts = (id, updateProducts) => {
        setEditing(false)
        //editamos en Api
    }

    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currenProducts, setCurrenProducts] = useState({
        _id: null,
        name: "",
        descripcion: "",
        stock: "",
        valor: ""
    })

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

    const cargarDatos = () => {
        fetch('http://localhost:1234/api/store')
            .then(res => res.json())
            .then(products => { setProducts(products) })
    };

    useEffect(() => {
        cargarDatos()
    }, [])

    return (
        <>
            <div>
                {
                    editing ? (
                        <EditProducts currenProducts={currenProducts} updateProducts={updateProducts} />
                    ) : (
                        <CreateProducts addProducts={addProducts} />
                    )
                }
                <br />
                <ListProducts products={products} deleteProducts={deleteProducts} editProducts={editProducts} />
            </div>
        </>
    );
}
export default Products;

import React, { useEffect, useState } from "react";
import CreateProducts from "../../components/createProducts";
import EditProducts from "../../components/editProducts";
import ListProducts from "../../components/listProducts";

const Products = (props) => {

    const addProducts = (products) => {
        //agregamos en Api
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
        id: null,
        name: "",
        descripcion: "",
        valor: ""
    })

    const editProducts = (products) => {
        setEditing(true)
        setCurrenProducts({
            id: products.id,
            name: products.name,
            descripcion: products.descripcion,
            valor: products.valor
        })
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

        <>
            <div>
                {
                    editing ? (
                        <EditProducts currenProducts={currenProducts} updateProducts={updateProducts}/>
                        ):(
                        <CreateProducts addProducts={addProducts} />
                    )
                }
                <br />
                <ListProducts products={products} deleteProducts={deleteProducts} editProducts={editProducts}/>

            </div>
        </>

    );
}
export default Products;

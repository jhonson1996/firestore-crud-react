import React, { useEffect, useState } from "react";
import { db } from "../firebase"
import Articulos from './Articulos'
import Categoria from './Categorias'

function Tienda() {
    
    const [productos, setProductos] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

     useEffect(() => {

        const getDatos = async () => {
            if(productos.length === 0){
               await db.collection("Productos").onSnapshot((datos) => {
                    const dato = [];
                    datos.forEach((doc) => {
                    dato.push({...doc.data(), id: doc.id});
                    
                    });
                    setProductos(dato);
                    setFilteredProducts(dato);
                });
                };
            }

            let _productos = (selectedCategory === 'all') ? productos : productos.filter((i) => {
                return i.categoria === selectedCategory;
            })
            setFilteredProducts(_productos);

        getDatos();
    },[selectedCategory, productos]);
    
    
    return(
        <>
        <div className="category_list">
        <h1>Categorias</h1>
            <Categoria selectCategory={setSelectedCategory}/>
        </div>
        <section className="product">
            <Articulos productos={filteredProducts}/>
        </section>
        </>
    );
}

export default Tienda;
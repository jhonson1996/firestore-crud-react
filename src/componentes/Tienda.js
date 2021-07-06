import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Articulos from './Articulos';
import Categoria from './Categorias';
import BarraT from './BarraT';



function Tienda({ logout, User }) {

	const [productos, setProductos] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');




	useEffect(() => {

		const getDatos = async () => {
			if (productos.length === 0) {
				await db.collection("Productos").onSnapshot((datos) => {
					const dato = [];
					datos.forEach((doc) => {
						dato.push({ ...doc.data(), id: doc.id });

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
	}, [selectedCategory, productos]);


	return (
		<div className="container">
			<BarraT User={User} logout={logout}/>
            <h1 className="ht">Galeria De Animales</h1>

			<section className='d-flex'>
			<div className="category_list">
				<h1>Categorias</h1>
				<Categoria selectCategory={setSelectedCategory} />
			</div>

			
			<Articulos productos={filteredProducts} />
			
			</section>
		</div>
	);
}

export default Tienda;
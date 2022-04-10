import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Charactersimg from "../../img/Charactersimg.jpg";
import "../../styles/Charactersdetails.css";
import { Context } from "../store/appContext";


export const Charactersdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {actions.getCharactersdetails(params.id);}, []);
	if (store.charactersdetails){
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src={Charactersimg}
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title">{store.charactersdetails.properties.name}</h1>{" "}
						<p>
							<strong>Birth Year:</strong> {store.charactersdetails.properties.birth_year}
						</p>
						<p>
							<strong>Height:</strong> {store.charactersdetails.properties.height}
						</p>
						<p>
							<strong>Mass:</strong> {store.charactersdetails.properties.mass}
						</p>
						<p>
							<strong>Hair Color:</strong> {store.charactersdetails.properties.hair_color}
						</p>
						<p>
							<strong>Skin Color:</strong> {store.charactersdetails.properties.skin_color} 
						</p>
						<p>
							<strong>Eyes Color:</strong> {store.charactersdetails.properties.eye_color}
						</p>
						<p>
							<strong>Gender:</strong> {store.charactersdetails.properties.gender}
						</p>
						
						<div className="boton">
							<Link className="btn btn-dark boton" to={"/Characters"}>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Cargando datos...</div>;
	}
	};

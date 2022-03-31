import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Charactersimg from "../../img/Charactersimg.jpg";


export const Charactersdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getCharacters(params.id);
	}, []);
	if (store.charactersdetails) {
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
							<strong>description:</strong> {store.charactersdetails.description}
						</p>
						<p>
							<strong>birth_year:</strong> {store.charactersdetails.properties.birth_year}
						</p>
						<p>
							<strong>height:</strong> {store.charactersdetails.properties.height}
						</p>
						<p>
							<strong>mass:</strong> {store.charactersdetails.properties.mass}
						</p>
						<p>
							<strong>hair_color:</strong> {store.charactersdetails.properties.hair_color}
						</p>
						<p>
							<strong>skin_color:</strong> {store.charactersdetails.properties.skin_color}
						</p>
						<p>
							<strong>eye_color:</strong> {store.charactersdetails.properties.eye_color}
						</p>
						<p>
							<strong>gender:</strong> {store.charactersdetails.properties.gender}
						</p>
						<p>
							<strong>created:</strong> {store.charactersdetails.properties.created}
						</p>
						<p>
							<strong>edited:</strong> {store.charactersdetails.properties.edited}
						</p>
						<p>
							<strong>homeworld:</strong> {store.charactersdetails.properties.homeworld}
						</p>
						<p>
							<strong>url:</strong> {store.charactersdetails.properties.url}
						</p>
						<div className="div-btn">
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

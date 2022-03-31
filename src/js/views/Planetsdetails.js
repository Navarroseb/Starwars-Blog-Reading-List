import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Charactersimg from "../../img/Charactersimg.jpg";


export const Planetsdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanets(params.id);
	}, []);
	if (store.planetsdetails) {
		return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src={Charactersimg}
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title">{store.planetsdetails.properties.name}</h1>{" "}
						<p>
							<strong>description:</strong> {store.planetsdetails.description}
						</p>
						<p>
							<strong>birth_year:</strong> {store.planetsdetails.properties.birth_year}
						</p>
						<p>
							<strong>height:</strong> {store.planetsdetails.properties.height}
						</p>
						<p>
							<strong>mass:</strong> {store.planetsdetails.properties.mass}
						</p>
						<p>
							<strong>hair_color:</strong> {store.planetsdetails.properties.hair_color}
						</p>
						<p>
							<strong>skin_color:</strong> {store.planetsdetails.properties.skin_color}
						</p>
						<p>
							<strong>eye_color:</strong> {store.planetsdetails.properties.eye_color}
						</p>
						<p>
							<strong>gender:</strong> {store.planetsdetails.properties.gender}
						</p>
						<p>
							<strong>created:</strong> {store.planetsdetails.properties.created}
						</p>
						<p>
							<strong>edited:</strong> {store.planetsdetails.properties.edited}
						</p>
						<p>
							<strong>homeworld:</strong> {store.planetsdetails.properties.homeworld}
						</p>
						<p>
							<strong>url:</strong> {store.planetsdetails.properties.url}
						</p>
						<div className="div-btn">
							<Link className="btn btn-dark boton" to={"/Planets"}>
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

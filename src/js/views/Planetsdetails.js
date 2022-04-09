import React from "react";
import { Link } from "react-router-dom";
import Planetimg from "../../img/Planetimg.jpg";
import "../../styles/Planetsdetails.css"


export const Planetsdetails = () => {
	return (
			<div className="container contenedor">
				<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
					<img
						src={Planetimg}
						className="card-img-top"
					/>
					<div className="card-body">
						<h1 className="card-title"></h1>{" "}
						<p>
							<strong>description:</strong>
						</p>
						<p>
							<strong>birth_year:</strong> 
						</p>
						<p>
							<strong>height:</strong>
						</p>
						<p>
							<strong>mass:</strong> 
						</p>
						<p>
							<strong>hair_color:</strong>
						</p>
						<p>
							<strong>skin_color:</strong>
						</p>
						<p>
							<strong>eye_color:</strong>
						</p>
						<p>
							<strong>gender:</strong> 
						</p>
						<p>
							<strong>created:</strong>
						</p>
						<p>
							<strong>edited:</strong> 
						</p>
						<p>
							<strong>homeworld:</strong> 
						</p>
						<p>
							<strong>url:</strong>
						</p>
						<div className="boton">
							<Link className="btn btn-dark boton" to={"/Planets"}>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	
};

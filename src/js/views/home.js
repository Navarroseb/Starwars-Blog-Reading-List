import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import homeimg from "../../img/homeimg.jpg";


export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<div className="container p-5">
			
					<img
						className="d-block w-100"
						src="https://www.pngmart.com/files/12/Star-Wars-Darth-Vader-PNG-Transparent-Image.png"
						alt="homeimg"
					/>
				
		</div>
	);
};

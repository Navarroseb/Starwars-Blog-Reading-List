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
						src="https://www.xtrafondos.com/descargar.php?id=3646&resolucion=2560x1440g"
						alt="homeimg"
					/>
				
		</div>
	);
};

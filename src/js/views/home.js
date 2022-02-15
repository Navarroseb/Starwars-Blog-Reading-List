import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Charactersdetails from "./Characterdetails";
import Planetsdetails from "./Planetsdetails";

export const Home = () => (
	<div className="text-center bg-dark">
		
		<Planetsdetails/>
		<Charactersdetails/>
		
	</div>
);
 
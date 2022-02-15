import React from "react";
import { Link } from "react-router-dom";
import starwarslogo from "../../img/Starwars_logo.png";
import darthvader from "../../img/Darth_Vader.png";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img src={starwarslogo} alt="" width="60" height="60" />
					<img src={darthvader} alt="" width="60" height="60" />
				</a>
				<div className="dropdown">			
				<a class="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
					Favorites
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a class="dropdown-item" href="#">Favorites</a></li>
				</ul>
				</div>
			</div>
		</nav>
	);
};

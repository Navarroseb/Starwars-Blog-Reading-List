import React from "react";
import { Link } from "react-router-dom";
import starwarslogo from "../../img/Starwars_logo.png";
import darthvader from "../../img/Darth_Vader.png";



export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src={starwarslogo} alt="" width="60" height="60" />
					<img src={darthvader} alt="" width="60" height="60" />
				</a>
					<audio controls src="https://mus2.about-in.tk/skm/859c366c-2e5a-494e-aeb7-f20379b4d8bf.mp3" />
				<div className="dropdown">
					<a className="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
						Favorites
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Favorites</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

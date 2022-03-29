import React from "react";
import { Link } from "react-router-dom";
import starwarslogo from "../../img/starwarslogo.png";




export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src={starwarslogo} alt="" width="90" height="70" />
				</a>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav m-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link active text-secondary" >
								<span className="navbar-brand mb-0 h1">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Characters" className="nav-link text-secondary">
								<span className="navbar-brand mb-0 h1">Characters</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="nav-link text-secondary">
								<span className="navbar-brand mb-0 h1">Planets</span>
							</Link>
						</li>
					</ul>
					</div>

					{/* <Dropdown className="ms-3">
						<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
							Favoritos <Badge bg="danger">{store.favoritos.length}</Badge>
						</Dropdown.Toggle>

						<Dropdown.Menu variant="dark">
							{store.favoritos.map((value, key) => (
								<Dropdown.Item key={key} href="#/action-4">
									{value}{" "}
									<i onClick={() => actions.deletefavoritos(key)} className="fas fa-trash-alt" />
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown> */}
				<div className="dropdown">
					<a className="nav-link dropdown-toggle bg-primary text-white bg-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
						Favorites
					</a>
					<ul className="dropdown-menu text-secondary" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Favorites</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

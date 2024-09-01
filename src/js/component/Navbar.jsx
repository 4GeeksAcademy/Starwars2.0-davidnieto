import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import people from "../../img/people.png";
import dead from "../../img/dead.png";
import globe from "../../img/globe.png";
import { toast } from "react-toastify";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const { addFavorite } = actions;
	const size = store?.favorites?.length;

	size >= 1 ? toast.success(`Añadido ${size}  favoritos ♥  `) : ('')


	return (
		<nav className="navbar sticky-top  navbar-expand-lg navbar-white  bg-black ">
			<div className="container d-flex justify-content-start  ">
				<Link to="/" className="navbar-brand p-2 ">
					<img
						className="img-fluid"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						height="50px"
						width="150px"
					/>
				</Link>
				<ul className=" nav ">
					<li className="nav-item ">
						<Link to="/" className="fs-5 p-3 mb-2 my-2 text-warning ">
							Personajes<img src={people} height="22px" width="22px" />
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/planets" className="fs-5 p-3 mb-2 my-2 text-warning">
							Planetas <img src={globe} height="22px" width="22px" />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/starships" className="fs-5 p-3 mb-2 my-2 text-warning">
							Vehiculos <img src={dead} height="22px" width="22px" />
						</Link>
					</li>
					<div className=" justify-content-end ">
						<div className="dropdown">
							{" "}
							<button
								onChange={() => addFavorite(id)}
								className="btn btn-success dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								data-bs-auto-close="false"
							>
								{" "}
								{size > 1 ? "Tus favoritos" : " Tus favoritos"} | {size}{" "}

							</button>
							<ul
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="dropdownMenuButton1"
							>
								{" "}
								<li>
									<a className="dropdown-item">Añade tu favorito!</a>
								</li>
								{store.favorites?.map((favorite, index) => {
									return (
										<i
											className="fas fa-trash"
											key={index}
											onClick={() => actions.removeFavorite(favorite)}
										>
											{favorite.properties.name}
										</i>
									);
								})}
							</ul>
						</div>
					</div>
				</ul>
			</div>
		</nav>
	);
};
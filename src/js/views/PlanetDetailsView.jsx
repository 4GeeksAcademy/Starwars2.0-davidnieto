import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

// Tatoine no se muestra. problemas con la API De las imagenes de StarWars  
// Refactorizar 

export const PlanetDetailsView = () => {
	const { store } = useContext(Context)
	const [plan, setPlan] = useState(null)

	const params = useParams();
	const formatted = params.id.replace('hack', "/")

	useEffect(() => {
		const planets = store.planets.find((detail) => params.id === detail._id)
		setPlan(planets)
	}, [store.planets, params])

	return (
		<>
			<div className="container border-0 my-3 fix" >
				<div className="card ">
					<div className="col">
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Nombre {plan?.properties?.name}</h5>
							<ul>
								<li className="card-text ">Diametro: {plan?.properties.diameter}</li>
								<li className="card-text ">Periodo de rotación: {plan?.properties.rotation_period}</li>
								<li className="card-text ">Periodo orbital {plan?.properties.orbital_period}</li>
								<li className="card-text ">Gravedad {plan?.properties?.gravity}</li>
								<li className="card-text ">Población: {plan?.properties?.population}</li>
								<li className="card-text ">Clima: {plan?.properties?.climate}</li>
								<li className="card-text ">Terreno: {plan?.properties?.terrain}</li>
								<li className="card-text ">Superficie de agua: {plan?.properties?.surface_water}</li>
							</ul>
						</div>
					</div>
			<Link to="/planets">
				<button className="btn btn-primary d-grid p-2 my-2 mb-3 mx-auto">
					Volver atrás
				</button>
			</Link>
				</div>
			</div>
			)
		</>
	);
};
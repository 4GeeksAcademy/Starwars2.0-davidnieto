import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const StartShipDetailsView = () => {
	const { store } = useContext(Context);
	const [startShip, setStartShip] = useState(null)
	const params = useParams();
	const maket = params.id.replace('ship', "/")

	useEffect(() => {
		const vehicles = store.vehicles.find((ship) => params.id === ship._id)
		setStartShip(vehicles)
	}, [store.vehicles, params])

	// Refactorizar 
	return (
		<>
			<div className="container border-0 my-3 fix" >
				<div className="card ">
					<div className="col">
						 <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${startShip?.uid}.jpg`}
              />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> Vehicles : {startShip?.properties.name}</h5>
							<ul>
								<li className="card-text ">Modelo: {startShip?.properties.model} </li>
								<li className="card-text ">Clase: {startShip?.properties.startship_class}</li>
								<li className="card-text ">Compañia: {startShip?.properties.manufacturer}</li>
								<li className="card-text ">Coste: {startShip?.properties.cost_in_credits}</li>
								<li className="card-text ">Largo: {startShip?.properties.length}</li>
								<li className="card-text ">Espacio: {startShip?.properties.crew}</li>
								<li className="card-text ">Pasajeros: {startShip?.properties.passengers}</li>
								<li className="card-text ">MGLT: {startShip?.properties.mglt}</li>
								<li className="card-text ">Capacidad de carga: {startShip?.properties.cargo_capacity}</li>
							</ul>
						</div>
					</div>
			<Link to="/starships">
				<button className="btn btn-primary d-grid p-2 my-2 mb-3 mx-auto">
					Volver atrás
				</button>
			</Link>
				</div>
			</div>
		</>
	);
};
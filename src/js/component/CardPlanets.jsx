import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';


// Refactorizar 

export function CardPlanets({ planeta }) {
  const { store, actions } = useContext(Context);
  const { _id: id, properties, uid } = planeta;
  const value = properties?.url?.match(/planets/g).join()

  function handleClick(e, id) {
    e.preventDefault()
    actions.addFavorite(id, "planets")
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3 "><img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} />
        <div className="card-body text-white bg-dark">
          <h5 className="card-title">Nombre: {properties.name}</h5>
          <p className="card-text">Población: {properties.population}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a onClick={(e) => handleClick(e, id)} href="#" className="btn btn-danger" > ♥</a>
            <Link className="btn btn-success" to={`/PlanetDetailsView/${id}`}  >
              Mas detalles </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
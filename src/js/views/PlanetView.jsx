import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/Carousel.jsx";
import { CardPlanets } from "../component/CardPlanets.jsx";
// Refactorizar 

export const PlanetView = () => {
  const { store, actions } = useContext(Context)
  const { addFavorite } = actions;

  
  return (<>
    <div className="container-sm 960">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="row">
        {store.planets.map(planeta => {
          return (<CardPlanets
            planeta={planeta}
            key={planeta._id}
            addFavorite={addFavorite}
          />)
        })}
      </div>
    </div>
  </>
  )
}

export default PlanetView;
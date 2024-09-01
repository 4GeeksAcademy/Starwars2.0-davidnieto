import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Carousel } from "../component/Carousel.jsx";
import { CardStarships } from "../component/CardStarships.jsx";
// Refactorizar 

export const ShipsView = () => {
  const { store, actions } = useContext(Context);
  const { addFavorite } = actions;
  return (
    <div>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="row">
          {store.vehicles.map(vehiculo => {
            return (<CardStarships
              vehiculo={vehiculo}
              key={vehiculo._id}
              addFavorite={addFavorite}
            />)
          })}
        </div>
      </div>
    </div>
  )
}


export default ShipsView
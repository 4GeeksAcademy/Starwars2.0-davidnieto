import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
// Refactorizar
export const CharacterDetailsView = ({}) => {
  const { store } = useContext(Context);
  const [char, setChar] = useState(null);
  const params = useParams();
  const formatted = params.id.replace("hack", "/");

  useEffect(() => {
    const character = store.people.find((item) => params.id === item._id);
    setChar(character);
  }, [store.people, params]);

  return (
    <>
      <div className="container border-0 my-4 ">
        <div className="row fix">
          <div className="col-lg-4 ">
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${char?.uid}.jpg`}
              />
              <div className="card-body">
                <h5 className="card-title p-2">
                  {" "}
                  Nombre: {char?.properties?.name}{" "}
                </h5>
                <ul>
                  <li className="card-text ">
                    Estatura: {char?.properties?.height}{" "}
                  </li>
                  <li className="card-text ">
                    Mass: {char?.properties?.mass}{" "}
                  </li>
                  <li className="card-text ">
                    Color de pelo: {char?.properties?.hair_color}{" "}
                  </li>
                  <li className="card-text ">
                    Color de piel: {char?.properties?.skin_color}
                  </li>
                  <li className="card-text ">
                    Color de ojos: {char?.properties?.eye_color}
                  </li>
                  <li className="card-text ">
                    Año de nacimiento: {char?.properties?.birth_year}
                  </li>
                  <li className="card-text ">
                    Genero: {char?.properties?.gender}
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn btn-primary d-grid p-2 my-2 mb-3 mx-auto">
                   Volver atrás
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
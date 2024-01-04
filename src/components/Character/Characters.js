import React from "react";
import "./Character.css"

const Character = (props) => { 
    /*En teoria las tarjetas no tienen funcionalidad*/
    return(//muestra cada personaje en las tarjetas
        <>
            <div className="container custom-container">
                <div className="row">
                    {
                        /*Transforma la lista de personajes*/
                        props.characterList.map((character, index)=>( // characterList es la varible que no he declarado, recibimos un arreglo
                            /*Aquiva el codigo Html generico de las tarjetas de cada personaje que pase como propiedades*/
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="card">
                                <img></img> {/*imagen del prsonaje*/}
                                <div> {/*Info del personaje*/}
                                    <h2 className="card-titlle">{character.name}</h2>
                                    <h3 className="card-titlle">ID:{character.id}</h3>
                                    <hr />
                                    <p className="card-text"> Species:{character.species}</p>
                                    <p className="card-text"> Gender:{character.gender}</p>
                                    <p className="card-text"> Location:{character.location.name}</p>
                                    <p className="card-text"> Status:{character.status}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Character
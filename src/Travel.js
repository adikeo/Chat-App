import React from "react";

//Builds the HTML

const Travel = ({ city, country, photo, distance }) => {
    return(
        <div className="root">
            <h1 className="h1">{city}</h1>
            <h3>{country}</h3>
            <img src={photo} alt="Placeholder"/>
            <p></p><b>Cidade a {distance} de Lisboa.</b><br></br>
        </div>
    )
};

export default Travel;
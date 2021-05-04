import React from 'react';
import data from '../data';
import Tarjetaprecios from '../tarjetaprecios/Tarjetaprecios';

function showAdditional(additional){
    const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('/n');
    alert(alertInformation)
};

function Homeprecios(){
    return(
        <div className="wrapper">
            <h1>Tarjeta de informacion</h1>
            {data.map(animal =>(
                <Tarjetaprecios additional = {animal.additional}
                diet={animal.diet} key={animal.name} name={animal.name} scientificName={animal.scientificName} showAdditional={showAdditional}
                size={animal.size}/>
      ))} 
        </div>
    )
}

export default Homeprecios;
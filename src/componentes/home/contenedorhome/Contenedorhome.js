import React from 'react';

class Contenedorhome extends React.Component {

	render() {

		return(
            <div class = "row">
                <div class = "col-sm-4" style = {{backgroundColor: '#F39C12 ',}}>
                    ciclos de poda
                </div>
                <div class = "col-sm-4" style = {{backgroundColor: '#E67E22',}}>
                    ciclos de siembra
                </div>
                <div class = "col-sm-4" style = {{backgroundColor: '#D35400  ',}}>
                    comparte tu experiencia
                </div>
            </div>
	

		)

	}

}

export default Contenedorhome;
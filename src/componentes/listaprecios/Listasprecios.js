import React from 'react';
import data from './data';
import Homeprecios from './homeprecios/Homeprecios';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

class Listaprecios extends React.Component{
    render() {
        return(
            <>

            <Menu/>
            <main role = "main" className = "flex-shrik-0 mt-5">
                <Homeprecios/>
            </main>
            <Footer/>
            </>
        )
    }
}

export default Listaprecios;
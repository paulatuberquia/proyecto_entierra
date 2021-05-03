import React from 'react';


class Footer extends React.Component {

    render() {

        return (

            <footer className = "container bg-success text-white" >
            <p className = "float-right" > < a href = "#" > Subir </a>
            </p >
            <p > & copy; {
                (new Date().getFullYear())
            }
            Mi Proyecto, Inc. & middot; < a href = "#" > Política de Privacidad </a> &middot; <a href="#">Términos</a > </p> 
            </footer >

        )

    }

}

export default Footer;
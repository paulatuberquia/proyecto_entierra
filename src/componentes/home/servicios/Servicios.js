import React from 'react';
//import './Slider.css';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios">
 
            <div className="row">
 
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded" src = {process.env.PUBLIC_URL + 'imagenes/kit.jpg'}  width="300" height="200">
                    </img>
                    <h2>Siente la tierra!</h2>
                    <p>Adquiere nuestro kit Entierra con el cual podras vivir una experiencia unica. Crea desde cero tu propio terraqueo y diseñalo como mas te guste.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded" src = {process.env.PUBLIC_URL + 'imagenes/bola.jpg'}  width="300" height="200">
                    </img>
                    <h2>Ven y aprende!</h2>
                    <p> Sea por pasion o curiosidad, ven a nuestro horrar, al lugar donde ocurre la magia y aprendamos juntos</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded" src = {process.env.PUBLIC_URL + 'imagenes/muchos.jpg'}  width="300" height="200">
                    </img>
                    <h2>Tierra-Deco</h2>
                    <p>aqui podras encontrar los diferentes productos que manejamos para entrega inmediata o tambien diseñar tu propio terrario</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;
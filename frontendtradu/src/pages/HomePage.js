//import React from "react";
import {Link} from "react-router-dom"

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeslide">
                <div className="slider-frame">
                    <ul>
                        <li>
                            <img src="img/slider index/slide1.jfif" alt="" />
                        </li>

                        <li>
                            <img src="img/slider index/slide2.jfif" alt="" />
                        </li>

                        <li>
                            <img src="img/slider index/slide3.jpg" alt="" />
                        </li>

                        <li>
                            <img src="img/slider index/slide4.jpg" alt="" />
                        </li>

                    </ul>
                </div>
            </div>


            <div className="columnas">
                <div className="bienvenidos">
                    <p>Somos un equipo de traductores e intérpretes, apasionados por brindar a nuestros clientes las mejores
                        soluciones lingüísticas.</p>

                    <p>En el mundo globalizado y competitivo de hoy, es absolutamente vital poder llegar a nuestros clientes
                        con un lenguaje claro, interesante y atrapante. Nosotros nos encargamos de ayudarlos a generar
                        mensajes eficientes.</p>

                    <p>Además, brindamos capacitaciones, cursos y apoyo para profesionales. Podés ver todos nuestos
                        servicios <Link to="/servicios">aquí</Link> </p>
                        
                       
                </div>

                <div className="testimonios">
                    <h2>Nuestros clientes</h2>
                    <div className="testimonio">
                        <span className="cita">Personal especializado y muy comprometido con nuestras necesidades.</span>
                        <span className="autor">Mercedes Zabala - Accenture</span>
                    </div>

                </div>

            </div>

        </main>
    );
}

export default HomePage;
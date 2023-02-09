//import React from "react";
const ServiciosPage = (props) => {
    return (

        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="img/servicios/tradupu.jfif" alt="Traduccion pública" />
                <div className="Info">
                    <h4>Traducciones públicas, literarias y científico-técnicas.</h4>
                    <p>Una traducción pública lleva la firma y el sello de un traductor público matriculado. Así, el traductor público con su firma da fe de lo traducido y se responsabiliza legalmente por su trabajo.
                        La traducción literaria consiste en trasladar una obra literaria a otro idioma sin perder la idea original del autor.
                        la traducción técnica consiste en trasladar textos que contienen una gran cantidad de terminología que se utiliza en una profesión específica o en un determinado sector y no son propias del lenguaje habitual.</p>
                </div>
            </div>


            <div className="servicio">
                <img src="img/servicios/inter.jfif" alt="Interpretación" />
                <div className="Info">
                    <h4>Servicios de interpretación</h4>
                    <p>El servicio de interpretación simultánea consiste en una traducción oral en tiempo real al idioma elegido. Por tanto, el intérprete traduce el discurso de manera inmediata, lo que le permite ajustarse al máximo al original y no omitir detalles.
                        La interpretación consecutiva se realiza cuando se traduce una conversación, una conferencia o un discurso una vez que el orador ha realizado una pausa en su discurso.
                    </p>
                </div>
            </div>


            <div className="servicio">
                <img src="img/servicios/copywrit.jfif" alt="Transcreacion y copywriting" />
                <div className="Info">
                    <h4>Servicios de transcreación y copywriting</h4>
                    <p>La respuesta rápida sería que el copywriting es la técnica de escritura creativa que ayuda a vender más. El copywriting construye textos atractivos que despierten emociones, enganchen, convenzan, atrapen… en definitiva, que vendan. La transcreación traduce conceptos, ideas, sentimientos y reacciones, en definitiva, añade un proceso creativo a la traducción y la acerca culturalmente a su público objetivo. Todo para llegar al propósito final, que es que el público objetivo reciba los mensajes igual que lo hace el público del idioma de origen, que lo entienda de la misma manera, aunque esto signifique tener textos muy diferentes entre sí en varios idiomas.</p>
                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/capacitacion.jfif" alt="Capacitaciones" />
                <div className="Info">
                    <h4>Servicios de capacitación profesional</h4>
                    <p>Durante la capacitación profesional se realiza la ampliación de conocimientos, aptitudes y habilidades de los empleados para aumentar la eficacia en el desarrollo de sus actividades, convirtiéndose en trabajadores más diestros y con un mayor rendimiento laboral.
                        Desde este punto de vista, ofrecemos capacitaciones en traducciones, interpretación, uso de herramientas de traducción automática, actualizaciones en el uso del lenguaje, etcétera.
                    </p>
                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/enseñanza.jfif" alt="Enseñanza" />
                <div className="Info">
                    <h4>Servicios de enseñanza de idiomas</h4>
                    <p>Ofrecemos cursos de idioma inglés, francés e italiano. Además, somos centro certificador respaldado por el Consejo Europeo de Enseñanza de Lenguas Extranjeras.</p>
                </div>
            </div>

        </main>
    );
}

export default ServiciosPage;
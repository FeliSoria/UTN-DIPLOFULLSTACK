//import React from "react";
import { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (

        <main className="holder contacto">

            <div>
                <h2>Contacto rápido</h2>

                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">

                    <p> <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p> <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p> <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p> <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}>Enviá tu consulta</textarea>
                    </p>
                    <p>
                        <input type="Submit" value="Enviar" id="submit" name="submit" />
                    </p>
{sending ? <p>Enviando...</p> : null}
{msg ? <p>{msg}</p> : null}
                </form>

            </div>

            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Podés contactarnos también a través de los siguientes medios</p>
                <ul>
                    <li>Teléfono:+54 11 4587 9632</li>
                    <li>Email:contacto@fstraducciones.com.ar</li>
                    <li>Facebook: <a href="https://www.facebook.com/profile.php?id=100090141611598">fstraducciones</a></li> 
                    <li>Instagram:  <a href="https://www.instagram.com/fstraducciones/">@fstraducciones</a></li>     
                </ul>
            </div>

        </main>





    );
}

export default ContactoPage;
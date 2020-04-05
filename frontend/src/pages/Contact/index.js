import React from 'react';
import './styles.css';

export default function Contact() {
    return (
        <div className="contact-container">
        <div className="content">

            <form>
                <h1>Contato</h1>
                <p>Entre em contato conosco. Envie sua dúvida, sugestão e reclamação.<br/>Estamos à disposição.</p>
                <input placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input  placeholder="WhatsApp" />
                <div className="input-group">
                    <input placeholder="Cidade" />
                    <input placeholder="UF"style={{ width:80}}/>
                </div>
                <textarea placeholder="Descrição" />
                <button className="button" type="submit">Enviar</button>
            </form>
            <section>
                <h1>MAPA</h1>
                <p>Nessa região acrescenta o mapa onde que apresenta a região do escritório</p>
            </section>

        </div>
    </div>
    );
}
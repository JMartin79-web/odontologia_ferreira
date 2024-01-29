import React from 'react'
import Divisor from '../Divisor/Divisor'

function Footer() {
return (

<footer className='footer-container'>

    <div className='footer'>
        <div className='footer-greeting'>
            <h5>¡Esperamos tu visita!</h5>
            <p>Clínica Dental Dr. Juan E. Ferreira</p>
        </div>
        
        <Divisor color='#ffffff5d'/> 

        <div className='footer-credentials'>
            
            <div>
                <p>Sitio desarrollado por Martin Aguirre</p>
            </div>

            <div>
                <a href="https://martinaguirre.ar/" target='_blank'>Visitar sitio web</a>
            </div>

        </div>
    </div>

</footer>
)
}

export default Footer
import React from 'react'
import { HashLink } from 'react-router-hash-link'


import heroImg from './../../assets/img/hero/hero_bg.jpg'

function Hero3() {
return (
    
<main className='hero3-container'  id='inicio'>
        
    <div className='hero-container'>

        <div className='hero'>
            <section className='hero-txt'>
                <h1>Tu mejor sonrisa</h1>
                <h1>nuestro mayor desafío</h1>
            
                <p>Agendá tu cita hoy y dejanos ser la razón detrás de tu confianza y bienestar dental.</p>
                        
                <div className='hero-txt-buttons'>
                    <HashLink smooth to={'/#nosotros'} className='secondary-button'>Saber más</HashLink>
                    <HashLink smooth to={'/#contacto'} className='primary-button'>Solicitar turno</HashLink>
                </div>
                    
            </section>
        </div>

    </div>
        
    <div className='hero-bg'>
       <img src={heroImg} alt="hero img" />
   </div>

</main>
)
}

export default Hero3
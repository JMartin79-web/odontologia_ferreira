import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import PrimaryButton from '../Buttons/PrimaryButton'


// IMGS
import heroImg from './../../assets/img/hero/hero_img.png'

function Hero() {
return (
    
<main className='hero-container'>

    <div className='hero'>

        <section className='hero-txt'>
            <h1>Tu mejor sonrisa</h1>
            <h1>nuestro mayor desafío</h1>

            <p>Texto de ejemplo</p>
            
            <div className='hero-txt-buttons'>
                <SecondaryButton txt="Saber más" />
                <PrimaryButton txt="Solicitar turno"/>
            </div>
        
        </section>

        <section className='hero-img'>
            <img src={heroImg} alt="hero img" />
        </section>

    </div>

</main>
)
}

export default Hero
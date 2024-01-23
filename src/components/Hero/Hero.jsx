import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import PrimaryButton from '../Buttons/PrimaryButton'

function Hero() {
return (
    
<main className='hero-container'>

    <div className='hero'>

        <section className='hero-txt'>
            <h1>Hero title</h1>

            <p>Texto de ejemplo</p>
            
            <div className='hero-txt-buttons'>
                <SecondaryButton txt="Secondary Button" />
                <PrimaryButton txt="Primary Button"/>
            </div>
        
        </section>

        <section className='hero-img'>

        </section>

    </div>

</main>
)
}

export default Hero
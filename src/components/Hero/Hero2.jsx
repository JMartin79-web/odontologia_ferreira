import React from 'react'
import { HashLink } from 'react-router-hash-link'


function Hero2() {
return (
<>
    <main className='hero2-container' id='inicio'>

        <div className='hero2'>

            <section className='hero-txt'>
                <div className='hero-svg'>
                </div>
                <br />                
                <div className='hero-txt-buttons'>
                    <HashLink smooth to={'/#'} className='secondary-button'>Saber más</HashLink>
                    <HashLink smooth to={'/#'} className='primary-button'>Solicitar turno</HashLink>
                </div>
            
            </section>

        </div>

    </main>
</>

)
}

export default Hero2
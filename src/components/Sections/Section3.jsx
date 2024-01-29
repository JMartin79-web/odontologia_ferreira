import React from 'react'


import callTo from '../../assets/img/call/call_to_img.png'

function Section3() {
return (
<main className='section2-container'>

<section className='section2'>
    <div className='section2-txt'>
        <h3>¡Solicitá tu turno!</h3>
        <br /> <br />
        <p>¿Listo para sonreír con confianza? Nuestro equipo está aquí para ti.
        <br />
        Agenda tu cita hoy mismo y déjanos cuidar de tu salud dental. ¡Tu sonrisa lo merece!
        </p>
        <br />
        <a className='contact-button' href='https://api.whatsapp.com/send/?phone=5491134334346&text&app_absent=0' target="_blank"> CONTACTANOS </a>
    </div>

    <div className='section2-img'>
        <img src={callTo} alt="imagen final" />
    </div>

</section>

</main>
  )
}

export default Section3
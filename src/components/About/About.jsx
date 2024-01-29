import React from 'react'
import CardSquare from '../Cards/CardSquare'


import pediatria from '../../assets/img/services/pediatria.jpg'
import general from '../../assets/img/services/general.jpg'
import estetica from '../../assets/img/services/estetica.jpg'
import ortodoncia from '../../assets/img/services/ortodoncia.jpg'
import ortopedia from '../../assets/img/services/ortopedia.jpg'
import cirugia from '../../assets/img/services/cirugia.jpg'

function About() {
return (
  <main className='about-container'>
  
    <section className='about'>
      <h3>Nuestros servicios</h3>
    
      <div className='about-content'>
      
        <CardSquare img={pediatria} txt='Pediatria' />

        <CardSquare img={general} txt='General' />

        <CardSquare img={estetica} txt='Estética' />
              
        <CardSquare img={ortodoncia} txt='Ortodoncia' />

        <CardSquare img={ortopedia} txt='Ortopedia' />

        <CardSquare img={cirugia} txt='Cirugía' />
      
      </div>
    
    </section>

  </main>

)
}

export default About
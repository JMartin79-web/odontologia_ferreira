import React from 'react'
import Carrousel from '../Carrousel/Carrousel'

function Section2() {
return (

<main className='section2-container' id='nosotros'>

    <section className='section2'>
        <div className='section2-txt'>
            <h3>Sobre nosotros</h3>
            <br />
            <p>Hemos logrado crecer juntos, capacitándonos, aprendiendo, acompañando, enseñando y educando a todos nuestros pacientes a alcanzar su mejor sonrisa y salud bucal que tanto merecen, hemos compartido muchos momentos y queremos mas. 
            <br /> <br />
            Somos un gran grupo de trabajo que está siempre atento a todas las necesidades de nuestros pacientes.
            </p>
        </div>

        <div className='section2-img'>
            <Carrousel/>
        </div>

    </section>

</main>

)
}

export default Section2
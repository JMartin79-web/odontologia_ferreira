import React from 'react'
import CardTestimonial from '../Cards/CardTestimonial'


import user from './../../assets/img/testimonials/user.jpg'
import maria from './../../assets/img/testimonials/maria.png'
import rita from './../../assets/img/testimonials/rita.png'
import pablo from './../../assets/img/testimonials/pablo.png'
import CardTestimonial2 from '../Cards/CardTestimonial2'



function TestimonialSection() {
return (

<div className='testimonial-section-container'>

    <div className='testimonial-section'>
        <h3>Lo que opinan nuestros clientes</h3>
        <div className='testimonial-section-cards'>
        	<CardTestimonial2
                img={maria}
                title='María Galvan'
                txt='"Buen profesional el Dr Ferreira, vamos todas las semanas por ortodoncia para mi hijo,estamos muy conformes!saludos🙋🏼‍♀️…"'
            />

            <CardTestimonial2
                img={rita}
                title='Rita Ranea'
                txt='"EXCELENTE EN TODO SENTIDO!!!! ATENCION, PROFESIONALISMO, SIMPATIA Y SOBRE TODO MUCHA HUMANIDAD..."'
            />

            <CardTestimonial2
                img={pablo}
                title='Pablo Lopez'
                txt='"Todo de primera , Gracias Dr Juan. Lugar impecable y súper limpio todo."'
            />
            
        </div>
    </div>

</div>
)
}

export default TestimonialSection
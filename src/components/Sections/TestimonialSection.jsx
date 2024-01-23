import React from 'react'
import CardTestimonial from '../Cards/CardTestimonial'


import user from './../../assets/img/testimonials/user.jpg'



function TestimonialSection() {
return (

<div className='testimonial-section-container'>

    <div className='testimonial-section'>
        <h3>Lo que opinan nuestros clientes</h3>
        <div className='testimonial-section-cards'>
        	<CardTestimonial
                img={user}
                title='Title'
                txt='"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque quos minima amet ratione."'
            />

            <CardTestimonial
                img={user}
                title='Title'
                txt='"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque quos minima amet ratione."'
            />

            <CardTestimonial
                img={user}
                title='Title'
                txt='"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque quos minima amet ratione."'
            />
            
        </div>
    </div>

</div>
)
}

export default TestimonialSection
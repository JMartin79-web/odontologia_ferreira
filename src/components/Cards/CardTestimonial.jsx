import React from 'react'


function CardTestimonial(props) {
  return (
    <div className='card-testimonial'>

        <div className='card-img'>
            <img className='card-img-img' src={props.img} alt="card img" />
        </div>

        <div className='card-txt'>
            <h6>{props.title}</h6>
            <p>{props.txt}</p>
        </div>


    </div>
  )
}

export default CardTestimonial
import React from 'react'

function CardTestimonial2(props) {
  return (
    <div className='card-testimonial-2'>

        <div className='card-img'>
            
            <div className='card-img-div'>
                <div className='card-img-img'> <img src={props.img}/> </div>
                <h6>{props.title}</h6>
            </div>

            <div className='card-stars'>
        
            <svg className='card-stars-star' viewBox="0 -960 960 960">
                <path className='star' d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
            </svg>
            <svg className='card-stars-star' viewBox="0 -960 960 960">
                <path className='star' d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
            </svg>
            <svg className='card-stars-star' viewBox="0 -960 960 960">
                <path className='star' d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
            </svg>
            <svg className='card-stars-star' viewBox="0 -960 960 960">
                <path className='star' d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
            </svg>
            <svg className='card-stars-star' viewBox="0 -960 960 960">
                <path className='star' d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
            </svg>
            </div>

        </div>

        

        <div className='card-txt'>
            <p>{props.txt}</p>
        </div>


    </div>
  )
}

export default CardTestimonial2
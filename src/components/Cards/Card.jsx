import React from 'react'

function Card(props) {
  return (
    <div className='card'>

        <div className='card-img'>
            <img src={props.img} alt="card img" />
        </div>

        <div className='card-txt'>
            <h6>{props.title}</h6>
            <p>{props.txt}</p>
        </div>


    </div>
  )
}

export default Card
import React from 'react'

function CardSquare(props) {
  return (
    <div className='card-square'>

        <div className='card-txt'>
            <p className='card-txt-p'> {props.txt} </p>
        </div>

        <div className='card-filter'>

        </div>

        <div className='card-img'>
            <img src={props.img} alt={props.txt} />
        </div>



    </div>
  )
}

export default CardSquare
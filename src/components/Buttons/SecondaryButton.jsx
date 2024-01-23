import React from 'react'

function SecondaryButton(props) {
  return (
    <div className='button-contenedor'>
    <button className='secondary-button' onClick={props.onClick}> {props.txt}</button>
    </div>
  )
}

export default SecondaryButton
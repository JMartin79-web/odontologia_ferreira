import React from 'react'

function PrimaryButton(props) {
  return (
    <>
    <div className='button-contenedor'>
    <button className='primary-button' onClick={props.onClick}> {props.txt}</button>
    </div>
    </>
  )
}

export default PrimaryButton
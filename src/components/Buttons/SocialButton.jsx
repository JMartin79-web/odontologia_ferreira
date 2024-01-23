import React from 'react'

function SocialButton(props) {
  return (
    <a className='social-button' href={props.href} target='_blank'>

        <div className='social-button-img'>
            {props.img}
        </div>

        <div className='social-button-txt'>
            <p> {props.txt} </p>
        </div>

    </a>
  )
}

export default SocialButton
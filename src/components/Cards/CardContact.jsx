import React from 'react'

function CardContact(props) {
return (
<div className='card-contact'>

    <div className='card-contact-info'>
        <h5> {props.title} </h5>
        <br />
        <p> {props.txt1} </p>
        <p> {props.txt2} </p>
        <br />
        <p> {props.phone} </p>
        
        <div className='card-contact-info-buttons'>
            <a className='contact-button' href={props.button1} target="_blank"> {props.button1Txt} </a>
        </div>
    
    </div>

    <div className='card-contact-img'>
    <iframe className='iframe' src={props.iframe} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

</div>

)
}

export default CardContact
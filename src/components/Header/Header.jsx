import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


// img

function Header() {

  const [toggle, setToggle] = useState(false)
  function handleToggle () { setToggle(!toggle) }


return (
<>
  <div className="header-container">

    <div className='header'> 

      <div className='header-logo'>
        <img src='#' alt="logo" />
        <HashLink smooth to='/#inicio' >Dr. Juan E. Ferreira</HashLink>
      </div>
      
      <div className='header-links'>
        <HashLink className='link' smooth to='/#nosotros' >Nosotros</HashLink>
        <HashLink className='link' smooth to='/#contacto' >Contacto</HashLink>
      </div>
    
      <div className='header-hamburger'>
        <div className='hamburger-container' onClick={handleToggle}>
          <div className={toggle? 'hamburger-btn-clicked' :'hamburger-btn'} >
              <span></span>
              <span></span>
              <span></span>
          </div>

        </div>
      </div>

    </div>
      

  </div>


  <div className={toggle ? 'dashboard-container' : 'dashboard-container-close'}>
   
    <div className='dashboard'>



    <div className='dashboard-content'>
        <div className='dashboard-links'>
            <HashLink className='link' smooth to='/#nosotros' >Nosotros</HashLink>
            <HashLink className='link' smooth to='/#contacto' >Contacto</HashLink>
          </div>
        
          <div className='dashboard-divisor'></div>

          <div className='dashboard-icons'>

            <a className='header-icon-link' href='https://www.instagram.com/odontologia_ferreira/' target='_blank' rel="noreferrer">
              <div className='header-icon header-icon-instagram'>
              <svg viewBox="0 0 31.8 31.8" >
                <path d="M15.9,7.73a8.21,8.21,0,1,0,8.21,8.21A8.22,8.22,0,0,0,15.9,7.73Zm0,13.46a5.26,5.26,0,1,1,5.26-5.25A5.28,5.28,0,0,1,15.9,21.19Z" transform="translate(0 -0.1)"/>
                <circle cx="24.43" cy="7.44" r="1.86"/>
                <path d="M29.24,2.73A9.15,9.15,0,0,0,22.5.1H9.3C3.72.1,0,3.82,0,9.4V22.54A9.24,9.24,0,0,0,2.69,29.4a9.34,9.34,0,0,0,6.67,2.5H22.44a9.47,9.47,0,0,0,6.73-2.5,9.19,9.19,0,0,0,2.63-6.8V9.4A9.21,9.21,0,0,0,29.24,2.73ZM29,22.6a6.28,6.28,0,0,1-1.86,4.68A6.63,6.63,0,0,1,22.44,29H9.36a6.63,6.63,0,0,1-4.68-1.67A6.44,6.44,0,0,1,3,22.54V9.4A6.39,6.39,0,0,1,4.68,4.72,6.53,6.53,0,0,1,9.36,3.05H22.57a6.42,6.42,0,0,1,4.68,1.73A6.62,6.62,0,0,1,29,9.4V22.6Z"/>
              </svg>
              </div>
            </a>

          </div>

      </div>

    </div>
  
    
  </div>

</>
);
}

export default Header
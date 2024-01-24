import React, { useState } from 'react'
import CarrouselImg from './CarrouselImg'

// IMGS
import img1 from '../../assets/img/carrousel/img1.jpg'
import img2 from '../../assets/img/carrousel/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'



function Carrousel(props) {

  // HAY QUE ACTUALIZARLO PARA QUE EL ARRAY VENGA DE PROPS. PORQUE SINO NO ES REUTILIZABLE
  
  let sliderImgsArray = [
    {id: 1, key:"1", name:'img1', src:img1 },
    {id: 2, key:"2", name:'img2', src:img2 },

  ]

  let sliderImgsArrayLength = sliderImgsArray.length
  const [sliderPosition, setSliderPosition] = useState(1)


  let handleBackArrow = () => {
    if(sliderPosition <= 1){
      setSliderPosition(sliderImgsArrayLength)
    }else{ setSliderPosition(sliderPosition -1) }
    
  }

  let handleFowardArrow = () => {
    if(sliderPosition >= sliderImgsArrayLength){
      setSliderPosition(1)
    }else{ setSliderPosition(sliderPosition +1) }
    
  }




  return (
    <div className='carrousel-container'>

        <div className='carrousel-arrow' onClick={handleBackArrow}>
          <svg className='carrousel-arrow-back' viewBox="0 -1000 1000 1000">
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
          </svg>
        </div>

        <div className='carrousel'>
            
            <div className={`carrousel-imgs carrousel-length-${sliderImgsArrayLength}`}>
                <div className={`carrousel-content carrousel-position-${sliderPosition}`}>
                  <CarrouselImg sliderImgs={sliderImgsArray} />
                </div>
            </div>

        </div>


        <div className='carrousel-arrow' onClick={handleFowardArrow}>
          <svg className='carrousel-arrow-foward' viewBox="0 -1000 1000 1000" >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
          </svg>
        </div>

    </div>
  )
}

export default Carrousel
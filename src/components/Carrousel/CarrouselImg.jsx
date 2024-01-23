import React from 'react'

function CarrouselImg(props) {

    let sliderImgs = props.sliderImgs

return(
    sliderImgs.map( (sliderImg) => {
        return(
            <div className='carrousel-imgs-div' key={sliderImg.key}>
                <img 
                    src={sliderImg.src} 
                    alt={`img ${sliderImg.id}`} 
                    className='carrousel-imgs-div-img'
                />
            </div>
        )
    })
)
}

export default CarrouselImg
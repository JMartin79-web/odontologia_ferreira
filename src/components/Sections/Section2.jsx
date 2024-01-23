import React from 'react'
import Carrousel from '../Carrousel/Carrousel'

function Section2() {
return (

<main className='section2-container' id='nosotros'>

    <section className='section2'>
        <div className='section2-txt'>
            <h3>Section 2</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            numquam sequi reprehenderit consectetur eos iste possimus aperiam amet, veniam vitae obcaecati commodi ab eaque totam expedita non velit minus fugiat!
            </p>
        </div>

        <div className='section2-img'>
            <Carrousel/>
        </div>

    </section>

</main>

)
}

export default Section2
import React from 'react'
import CardSquare from '../Cards/CardSquare'

function About() {
return (
  <main className='about-container'>
  
    <section className='about'>
      <h3>About</h3>
    
      <div className='about-content'>
      
        <CardSquare
          txt='texto de ejemplo'  
        />

        <CardSquare
          txt='texto de ejemplo'  
        />

        <CardSquare
          txt='texto de ejemplo'  
        />
      
      </div>
    
    </section>

  </main>

)
}

export default About
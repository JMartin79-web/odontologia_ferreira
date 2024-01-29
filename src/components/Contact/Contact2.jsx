import React from 'react'
import CardContact from '../Cards/CardContact'

function Contact2() {
  let CABA = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5523.28443449885!2d-58.392762112108265!3d-34.599999733816105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabf24e4d68f%3A0x7bc19237cec68e5f!2sMontevideo%20955%207d%2C%20C1017AAS%20CABA!5e0!3m2!1ses-419!2sar!4v1706190993160!5m2!1ses-419!2sar'

  let MALVINAS = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.5714886931005!2d-58.67422882594396!3d-34.51706542328148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbcc14ea2d5c5%3A0x8fad9d17fc62157b!2sAv.%20Pres.%20Juan%20Domingo%20Per%C3%B3n%20395%2C%20Villa%20de%20Mayo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1706191125871!5m2!1ses-419!2sar"

return (
<div className='contact-2-container' id='contacto'>

    <div className='contact-2'>
        <h4>Nuestras sedes</h4>
        <br />
        <div className='contact-2-cards'>
            
            <CardContact
                title='Malvinas Argentinas'
                txt1='Av. Pte Perón 395, Villa de Mayo'
                txt2='Lunes a viernes de 09:00 a 12:00'
                phone='Llamá al 4463-6480 o contactanos por Whatsapp'
                iframe={MALVINAS} 
                
                button1="https://api.whatsapp.com/send/?phone=5491134334346&text&app_absent=0"
                button1Txt='Whatsapp'

            />

            <CardContact
                title='CABA'
                txt1='Montevideo 955 7D, CABA'
                txt2='Lunes, miércoles y viernes de 09:00 a 12:00'
                phone='Llamá al 4311-7684 o contactanos por Whatsapp'
                iframe={CABA}

                button1="https://api.whatsapp.com/send/?phone=5491134334346&text&app_absent=0"
                button1Txt='Whatsapp'
            />

        </div>
    
    </div>

</div>

)
}

export default Contact2

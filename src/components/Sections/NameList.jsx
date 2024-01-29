import React from 'react'


import IOMA from './../../assets/img/list/ioma.png'
import MEDIFE from './../../assets/img/list/medife.svg'
import OSPJN from './../../assets/img/list/ospjn.png'
import SANCOR from './../../assets/img/list/sancor.png'

function NameList() {
return (
<div className='namelist-container'>

    <div className='namelist'>
        <h4>Obras scociales con las que trabajamos</h4>
        
        <div className='namelist-list'>

            <div className='item'>
                <img src={IOMA} alt="logo de la obra social" />
            </div>
            
            <div className='item'>
                <img src={MEDIFE} alt="logo de la obra social" />
            </div>
            
            <div className='item'>
                <img src={OSPJN} alt="logo de la obra social" />
            </div>
            
            <div className='item'>
                <img src={SANCOR} alt="logo de la obra social" />
            </div>
        </div>
    </div>

</div>
)
}

export default NameList
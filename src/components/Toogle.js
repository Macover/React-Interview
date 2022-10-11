import React from 'react'

const Toogle = ({handleCheck}) => {
    return (
        <div className='container__toogle-container'>
            <span className='toogle__text'>HD GIFs</span>
            <label className='toogle__label'>
                <input onChange={e=>handleCheck(e)} id='toogle' className="toogle__input" type="checkbox" />
                <span className='toogle__slider toogle-rounded'></span>
            </label>
        </div>
    )
}

export default Toogle
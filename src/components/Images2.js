import React from 'react'
import gallery1 from '../images/gallery-6.webp'
import gallery2 from '../images/gallery-2.webp'
import gallery3 from '../images/gallery-8.webp'
import gallery4 from '../images/gallery-9.webp'
import gallery5 from '../images/gallery-3.webp'
import gallery from '../images/earth.png'

function Images2() {
  return (
    <>
    <img className='plane' src={gallery} alt="" />
    <div className='pics'>
      <img className='pics2' src={gallery1} alt="" />
      <img className='pics2' src={gallery2} alt="" />
      <img className='pics2' src={gallery3} alt="" />
      
        </div>
        <div>
            <img className='pics2' src={gallery4} alt="" />
            <img className='pics2' src={gallery5} alt="" />
        </div>
        </>
  )
}

export default Images2

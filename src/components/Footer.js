import React from 'react'
import  img from '../images/REN 23 logo.png'
import img2 from '../images/student council white (1).png'
function Footer() {
  return (
    <div className='foot'>
      <img className='ren-img' src={img} alt="" />
      <img className='council' src={img2} alt="" />
      <span className='span1'>
        <h2 className='contact'>CONTACT US</h2>
        <p className='one'>
        Technical Head: +919782971327 
        (Roonak Khandelwal)
        </p>
        <p className='two'>
        Cultural Head: +918209017116
        (Shubhanker)
        </p>
        <p className='one'>
        Splash Head: +917240578521 
        (Rajeev Sharma)
        </p>
        <p className='two'>
        For Registration: +917742044215 
        (Tanishk Maheshwari)
        </p>
        <p className='one'>renaissance@jecrc.ac.in</p>
      </span>
    </div>
    
  )
}

export default Footer

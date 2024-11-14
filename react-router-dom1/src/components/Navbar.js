import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/"><li>gvhgv</li></NavLink>
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/about"><li>ljlhhgv</li></NavLink>
      <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/login"><li>ljlv</li></NavLink>
    </div>
  )
}

export default Navbar

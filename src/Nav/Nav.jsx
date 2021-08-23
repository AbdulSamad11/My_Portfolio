import React from 'react';

const Nav = ()=>{
return (
    <>
<div className="topnav" id="myTopnav">
    <span className='logo'>Abdul Samad</span>
  <a href="upcoming" className="active">Work</a>
  <a href="tools" className="active">Contact</a>
  <a href="/" className="active">Main</a>
  <a href='null' className="icon">
    <i className="fa fa-bars"></i>
  </a>
</div>
</>
);
}

export default Nav;
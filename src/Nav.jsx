import React from 'react';

const Nav = ()=>{
return (
    <>
<div className="topnav" id="myTopnav">
    <span className='logo'>Abdul Samad</span>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="#home" className="active">Home</a>
  <a href='null' className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>
</>
);
}

export default Nav;
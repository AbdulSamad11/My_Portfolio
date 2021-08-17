import React from 'react';

const Nav = ()=>{
return (
    <>
<div className="topnav" id="myTopnav">
    <span className='logo'>Abdul Samad</span>
  <a href="upcoming" className="active">Upcoming</a>
  <a href="tools" className="active">Tools</a>
  <a href="/" className="active">Main</a>
  <a href='null' className="icon">
    <i className="fa fa-bars"></i>
  </a>
</div>
</>
);
}

export default Nav;
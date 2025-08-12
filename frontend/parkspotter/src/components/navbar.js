import React from 'react';
import './navbar.css';
import Logo from './../assets/logo.png';
function Navbar () {
    return (
        <div>
        <nav className="navbar navbar-expand-lg ">
    <div class="container-fluid">
     <img className='logo' src={Logo}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  " aria-current="page" href=".">Home</a>
        </li>

         <li class="nav-item">
          <a class="nav-link  " aria-current="page" href=".">Dashboard</a>
        </li>

         <li class="nav-item">
          <a class="nav-link  " aria-current="page" href=".">Availability</a>
        </li>

         <li class="nav-item">
          <a class="nav-link  " aria-current="page" href=".">Booking</a>
        </li>
    
       
        

        
      </ul>

        <button class="btn btn-outline-success " type="submit">Log in</button>
  
        <button class="btn btn-success ms-3 me-5" type="submit">Sign up</button>
  
    </div>
  </div>
</nav>
        </div>
    )
};


export default Navbar;
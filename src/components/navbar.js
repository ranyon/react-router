import React from 'react';
import {Link} from 'react-router-dom'



const Navbarr = () =>{
    return(

        <>
    <center>
    <ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/contact'>contact</Link></li>
  <li><Link to='/services'>Services</Link></li>
  
</ul>
    </center>
    </>
        )
}

export default Navbarr;
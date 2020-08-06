import React from 'react'
import {Link} from 'react-router-dom';

import './styles/Navbar.css';
import logoBlanco from '../images/logo-urbe3.svg';
class Navbar extends React.Component{
  render(){
    return(
      <div className='Navbar'>
        <div className = 'container-fluid'>  
          <Link className='Navbar__brand' to ='/'>
            <img className='Navbar__brand-logo' src={logoBlanco} alt='logo'/>
            <span className='font-weight-light '>URBE</span>
            <span className='font-weight-bold'>-CONF</span>
          </Link>
        </div>
      </div>
    )
  }  
}

export default Navbar;
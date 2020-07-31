import React from 'react';

import './styles/BadgeNew.css'
import URBE2 from '../images/Logo-URBE2.png';
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid BadgeNew__hero-1' src ={URBE2} alt= 'Logo'/>
        </div>
        <div className='container'>
          <div className= 'row'>
            <div className = 'col'>
              <Badge firstName='Gibson' lastName='Rosales' twiter='RosalesGibson' jobTitle='Profesor y Administrador' avatar='https://s.gravatar.com/avatar/dd18a220fc4d5d1191bf6432435c4d3f?s=80'/>
            </div>
          </div>

        </div>
      </div>
    )
  }  
}

export default BadgeNew;
import React from 'react';

import './styles/BadgeNew.css'
import URBE2 from '../images/Logo-URBE2.png';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
  state = { form:{
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};

  handleChange = e => {  
    this.setState ({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  
  render(){
    return(
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid BadgeNew__hero-1' src ={URBE2} alt= 'Logo'/>
        </div>
        <div className='container'>
          <div className= 'row'>
            <div className = 'col-6'>
              <Badge 
              firstName={this.state.form.firstName} 
              lastName={this.state.form.lastName} 
              twitter={this.state.form.twitter} 
              jobTitle={this.state.form.jobTitle}
              email={this.state.form.email} 
              avatarUrl='https://s.gravatar.com/avatar/dd18a220fc4d5d1191bf6432435c4d3f?s=80'/>
            </div>
            <div className= 'col-6'>
              <BadgeForm 
              onChange={this.handleChange}
              formValues ={this.state.form}
              />
            </div>
          </div>

        </div>
      </div>
    )
  }  
}

export default BadgeNew;
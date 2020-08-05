import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgeDetails.css';
import URBE2 from '../images/logo-urbe8.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// function useIncreaseCount(max) {
//   const [ count, setCount ] = React.useState(0);
//   if (count> max) {
//     setCount(0)
//   };

//   return [count, setCount];
// } era para mirar como funcionaban los hook

function BadgeDetails (props) {
  // const [ count, setCount ] = useIncreaseCount(5); era para la practica de los hook
  const badge = props.badge;
  return (
    <div>
        <div className='BadgeDetails__hero'>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={URBE2} alt="Logo de la conferencia"/>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} twitter ={badge.twitter} jobTitle={badge.jobTitle} />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  {/* <button onClick={()=>{
                    setCount(count + 1)
                  }} className='btn btn-primary mr-3'>
                  Increase Count :{count}
                  </button> era para la practica de los hook*/}
                  <Link className='btn btn-primary mb-4' to ={`/badges/${badge.id}/edit`}>Edit</Link>
                </div>
                <div>
                  <button onClick={props.onOpenModal} className ='btn btn-danger'>Delete</button>
                  <DeleteBadgeModal 
                  isOpen={props.modalIsOpen} 
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BadgeDetails;
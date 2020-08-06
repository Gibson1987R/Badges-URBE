import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal (props) {
  return <Modal
  isOpen={props.isOpen} 
  isClose={props.isClose}>
    <div className='DeleteBadgeModa'>
      <h1>
        Are You Sure?
      </h1>
      <p>
        You are about to delete this badge.
      </p>
    </div>
    <div>
      <button onClick={props.onDeleteBadge} className='btn btn-danger mr-4'>Delete</button>
      <button onClick={props.onClose} className='btn btn-primary'>Cancel</button>
    </div>
  </Modal>;
}

export default DeleteBadgeModal;

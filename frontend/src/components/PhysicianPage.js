import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const PhysicianData = ({
  id, name, bio, photo, specialization, city, consultation_fee,
}) => {
  const dispatch = useDispatch();

  return (

    <div className='doctor-container'>
     <div>
     <div>{photo}</div>
     
     </div>
     <div>
        <div>{name}</div>
        <div>{bio}</div>
        <div>{specialization}</div>
        <div>{city}</div>
      <div>{consultation_fee}</div>

     </div>
     
      
      <button type="button">Reserve Appointment</button>
      <button type="button">Cancel Appointment</button>
    </div>

  );
};

PhysicianData.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired,
  consultation_fee: PropTypes.number.isRequired,

};

export default PhysicianData;

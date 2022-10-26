/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDoctorDetails } from '../redux/physicians/physicianSlice';

const PhysicianPage = ({
  id, name, bio, photo, specialization, city, consultation_fee,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(getDoctorDetails({ name }));
    navigate(`/doctors/${id}`);
  };
  return (
    <div key={id} className="doctor-container">
      <div>
        <img src={photo} alt="Doctor" className="doctor-image" />

      </div>
      <div className="doctor-info">

        <div className="doctor-name" onClick={() => handleClick(name)}>
          {name}
        </div>
        <div className="doctor-specialization">{specialization}</div>
        <div className="doctor-fee">
          <span>Consultation Price:  </span>
          {consultation_fee}
          $
        </div>
        <div className="doctor-bio">{bio}</div>
        <div className="doctor-city">{city}</div>

      </div>
    </div>

  );
};
PhysicianPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired,
  consultation_fee: PropTypes.number.isRequired,

};

export default PhysicianPage;

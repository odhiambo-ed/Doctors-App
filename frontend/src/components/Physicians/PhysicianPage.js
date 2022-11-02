/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDoctorDetails } from '../../redux/physicians/physicianSlice';

const PhysicianPage = ({
  id,
  name,
  photo,
  specialization,
  city,
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
        <button
          type="button"
          className="doctor-name"
          onClick={() => handleClick(name)}
        >
          {`${name}, ${specialization}`}
        </button>
        <div className="doctor-city">{city}</div>
      </div>
    </div>
  );
};
PhysicianPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired,
  city: PropTypes.string.isRequired,
};
export default PhysicianPage;

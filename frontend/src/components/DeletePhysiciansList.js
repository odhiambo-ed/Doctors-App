/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const DeletePhysiciansList = ({
  id, name, photo, specialization,
}) => (
  <div key={id} className="doctor-container">
    <div>
      <img src={photo} alt="Doctor" className="doctor-image" />
    </div>
    <div className="doctor-info">
      <div type="button" className="doctor-name">
        {name}
      </div>
      <div className="doctor-specialization">{specialization}</div>
      <button type="button" className="doctor-name">
        Delete
      </button>
    </div>
  </div>
);
DeletePhysiciansList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired,
};
export default DeletePhysiciansList;

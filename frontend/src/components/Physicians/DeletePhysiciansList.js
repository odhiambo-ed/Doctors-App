/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const baseURL = 'http://localhost:3000/physicians';

const DeletePhysiciansList = ({
  id, name, photo, specialization,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setState(response.data);
    });
  }, []);

  const deletePost = () => {
    axios
      .delete(`${baseURL}/1`)
      .then((response) => {
        alert('Post deleted!');
        const physicians = [...state.physicians, response.data];
        setState(
          physicians.filter((physician) => physician.id !== id),
        ); // setState(null);
      });
  };

  return (
    <div key={id} className="doctor-container">
      <div>
        <img src={photo} alt="Doctor" className="doctor-image" />
      </div>
      <div className="doctor-info">
        <div type="button" className="doctor-name">
          {name}
        </div>
        <div className="doctor-specialization">{specialization}</div>
        <button type="button" className="doctor-name" onClick={deletePost(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
DeletePhysiciansList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired,
};
export default DeletePhysiciansList;

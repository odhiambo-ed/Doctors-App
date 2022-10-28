/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const BookAppointmentForm = ({ physicianDetail }) => {
  const location = useLocation();
  console.log(physicianDetail);
  return (
    <form>
      <label htmlFor="date">
        Date:
        <input type="text" id="date" />
      </label>
      <label htmlFor="city">
        City:
        <input type="text" id="city" />
      </label>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          placeholder={location.state.physicianDetail[0].name}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
BookAppointmentForm.propTypes = {
  physicianDetail: PropTypes.node.isRequired,
};
export default BookAppointmentForm;

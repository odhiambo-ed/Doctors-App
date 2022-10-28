/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const AppointmentPage = ({
  id, reason, date, time,
}) => (
  <div key={id} className="appointment-container">
    <div className="appointment-info">
      <div className="appointment-date">{date}</div>
      <div className="appointment-time">{time}</div>
      <div className="appointment-reason">{reason}</div>
    </div>
  </div>
);
AppointmentPage.propTypes = {
  id: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default AppointmentPage;

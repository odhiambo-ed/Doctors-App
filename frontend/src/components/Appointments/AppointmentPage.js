/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './Appointment.css';
import { useSelector } from 'react-redux';
import Arrow from '../../assets/next.png';

const AppointmentPage = ({
  id, reason, date, time, doctor,
}) => {
  const { physicianList } = useSelector((state) => state.physicians);
  // const current = physicianList.filter((val) => val.id === doctor);
  console.log(physicianList, doctor);
  return (
    <div key={id} className="appointment-container">
      <div className="appointment-info">
        <img src={Arrow} alt="user-imag" />
        <div className="appointment-date">{date}</div>
        <div className="appointment-time">{time}</div>
        <div className="appointment-reason">{reason}</div>
      </div>
    </div>
  );
};
AppointmentPage.propTypes = {
  id: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  doctor: PropTypes.string.isRequired,
};
export default AppointmentPage;

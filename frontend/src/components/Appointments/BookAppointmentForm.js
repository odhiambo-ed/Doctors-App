/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../Physicians/Physician.css';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';

const baseURL = 'http://localhost:3000/api/v1/appointments';

const BookAppointmentForm = () => {
  const [state, setState] = useState(null);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('Appointments');
  const location = useLocation();

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setState(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      time: state.time,
      date: state.date,
      reason: state.reason,
      physician_id: location.state.physicianDetail[0].id,
      user_id: 1,
    };
    axios
      .post(baseURL, {
        appointment,
      })
      .then((response) => {
        const appointments = [...state.appointments, response.data];
        setState({ appointments });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="subWindow">
      <div className="navigationWindow">
        {show ? (
          <div>
            <div className="navTop">
              <h3>Doctor Services</h3>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="returnArrow"
              >
                <img src={BackArrow} alt="back-arrow" className="backArrow" />
              </button>
            </div>
            <div className="navigationOptions">
              <ActiveTabs
                label="Doctors"
                path="/doctors"
                active={active}
                setActive={setActive}
              />
              <ActiveTabs
                label="Appointments"
                path="/appointments"
                active={active}
                setActive={setActive}
              />
              <ActiveTabs
                label="LOGIN"
                path="/login"
                active={active}
                setActive={setActive}
              />
            </div>
            <div className="icons">
              <img src={Twitter} alt="twitter" />
              <img src={Facebook} alt="facebook" />
              <img src={Google} alt="google" />
              <img src={Vimeo} alt="vimeo" />
              <img src={Pinterest} alt="pinterest" />
            </div>
            <div>
              <p style={{ textAlign: 'center', fontSize: 13, marginTop: 15 }}>Copyright 2022 @Doctor Services</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="burgerButton"
            onClick={() => setShow(!show)}
          >
            <img src={Logo} alt="logo-img" className="burger" />
          </button>
        )}
      </div>
      <div className="formSection">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p className="labelTitle">Date</p>
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                id="appointmentDate"
                required
                className="inputSection"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <p className="labelTitle">Time</p>
            <label htmlFor="time">
              <input
                type="text"
                name="time"
                id="appointmentTime"
                required
                className="inputSection"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <p className="labelTitle">Consulation Reason</p>
            <label htmlFor="reason">
              <input
                type="text"
                id="appointmentReason"
                name="reason"
                required
                className="inputSection"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <p className="labelTitle">Name</p>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                className="inputSection"
                placeholder={location.state.physicianDetail[0].name}
              />
            </label>
          </div>

          <button className="bookAppointment" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentForm;

const ActiveTabs = ({
  path,
  label,
  active,
  setActive,
}) => (
  <div
    className="optionLabel"
    style={{
      backgroundColor: active === label ? 'rgb(113, 243, 27)' : 'white',
    }}
  >
    <button
      type="button"
      className="navButton"
      onClick={() => setActive(label)}
    >
      <a
        style={{
          color: active === label ? 'white' : 'black',
          textDecoration: 'none',
        }}
        href={path}
      >
        {label}
      </a>
    </button>
  </div>
);

ActiveTabs.propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

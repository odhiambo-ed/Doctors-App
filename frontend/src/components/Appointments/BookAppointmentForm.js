/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Physicians/Physician.css';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';
import useAuth from '../../state';

const BookAppointmentForm = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('Appointments');
  const [user, setUser] = useState(null);
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [selectReason, setSelectReason] = useState('');
  const [status, setStatus] = useState('');
  const session = useAuth();
  useEffect(() => {
    (async () => {
      const exist = await session.currentUser;
      setUser(exist);
    })();
  }, [session]);

  const signOutUser = async () => {
    await session.signOut();
  };
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const base = location.state.physicianDetail[0];
    const appointment = {
      time: selectTime,
      date: selectDate,
      reason: `${selectReason}*${base.name}+${base.photo}`,
      physician_id: location.state.physicianDetail[0].id,
      user_id: user.id,
    };
    fetch('http://localhost:3000/api/v1/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setStatus('Appointment booked successfully!!');
      setSelectDate('');
      setSelectTime('');
      setSelectReason('');
      setTimeout(() => {
        setStatus('');
      }, 1500);
    });
  };

  return (
    <div className="subWindow">
      <div
        className="navigationWindow"
        style={{
          width: show ? '18%' : '0%',
        }}
      >
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
              {user === null && (
                <ActiveTabs
                  label="LOGIN"
                  path="/login"
                  active={active}
                  setActive={setActive}
                />
              )}
              {user === null && (
                <ActiveTabs
                  label="SIGN UP"
                  path="/register"
                  active={active}
                  setActive={setActive}
                />
              )}
            </div>
            <div
              className="logoutSection"
              style={{ backgroundColor: user !== null ? 'red' : '' }}
            >
              {user !== null && (
                <button type="button" onClick={signOutUser}>
                  Log Out
                </button>
              )}
            </div>
            <div className="icons">
              <img src={Twitter} alt="twitter" />
              <img src={Facebook} alt="facebook" />
              <img src={Google} alt="google" />
              <img src={Vimeo} alt="vimeo" />
              <img src={Pinterest} alt="pinterest" />
            </div>
            <div>
              <p style={{ textAlign: 'center', fontSize: 13, marginTop: 15 }}>
                Copyright 2022 @Doctor Services
              </p>
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
        {user === null ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>You need to login first!!!</h1>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {status && (
              <p style={{
                textAlign: 'center',
                color: 'red',
              }}
              >
                {status}
              </p>
            )}
            <div className="form-group">
              <p className="labelTitle">Date</p>
              <label htmlFor="date">
                <input
                  type="date"
                  name="date"
                  id="appointmentDate"
                  required
                  className="inputSection"
                  value={selectDate}
                  onChange={(e) => setSelectDate(e.target.value)}
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
                  value={selectTime}
                  onChange={(e) => setSelectTime(e.target.value)}
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
                  value={selectReason}
                  onChange={(e) => setSelectReason(e.target.value)}
                />
              </label>
            </div>

            <button className="bookAppointment" type="submit">
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointmentForm;

const ActiveTabs = ({
  path, label, active, setActive,
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

/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import RightArrow from '../../assets/next.png';
import './Physician.css';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';
import useAuth from '../../state';

const Physician = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('Doctors');
  const [user, setUser] = useState(null);
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
  const { physicianList } = useSelector((state) => state.physicians);
  const physicianDetail = physicianList.filter(({ show }) => show);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/doctors/${id}/book`, { state: { physicianDetail } });
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
            <div className="logoutSection" style={{ backgroundColor: user !== null ? 'red' : '' }}>
              {user !== null && (
                <button type="button" onClick={signOutUser}>Log Out</button>
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
      <div key={physicianDetail[0].id} className="doctor-container1">
        <div>
          <img
            src={physicianDetail[0].photo}
            alt="Doctor"
            className="doctor-image1"
          />
        </div>
        <div className="doctor-info">
          <div className="doctor-name1">{physicianDetail[0].name}</div>
          <div className="doctor-specialization1">
            {physicianDetail[0].specialization}
          </div>
          <div className="doctor-fee1">
            <span>Price:</span>
            <span>
              $
              {physicianDetail[0].consultation_fee}
            </span>
          </div>
          <div className="doctor-bio1">{physicianDetail[0].bio}</div>
          <div className="doctor-city1">{physicianDetail[0].city}</div>
          <button
            type="button"
            className="bookAppointment"
            onClick={() => handleClick(physicianDetail[0].id)}
          >
            <h3>Book An Appointment</h3>
            <img className="nextImage" src={RightArrow} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Physician;

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

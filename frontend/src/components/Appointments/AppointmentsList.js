import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAppointments } from '../../redux/appointments/appointmentSlice';
import AppointmentDetail from './AppointmentDetail';
import './Appointment.css';
import '../Physicians/Physician.css';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';
import useAuth from '../../state';

const AppointmentsList = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('LOGIN');
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
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.appointments);
  useEffect(() => {
    async function fetchAllAppointments() {
      dispatch(fetchAppointments());
    }
    fetchAllAppointments();
  }, []);
  return (
    <div className="subWindow">
      <div
        className="navigationWindow nest"
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
            style={{
              marginTop: -9,
            }}
            onClick={() => setShow(!show)}
          >
            <img src={Logo} alt="logo-img" className="burger" />
          </button>
        )}
      </div>
      <div className="appointments">
        <div className="appointments">
          {loading && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </div>
          )}
          {!loading && user !== null && <AppointmentDetail />}
          {user === null && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>You need to login first!!!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AppointmentsList;

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

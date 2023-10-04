import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import '../Physicians/Physician.css';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';
import useAuth from '../../state';

const Register = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('SIGN UP');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [user, setUser] = useState(null);
  const session = useAuth();
  useEffect(() => {
    (async () => {
      const exist = await session.currentUser;
      setUser(exist);
    })();
  }, [session]);
  const registerUser = async () => {
    const dataObj = {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    await session.register(dataObj);
    await setUsername('');
    await setEmail('');
    await setPassword('');
    await setPasswordConfirmation('');
  };

  const signOutUser = async () => {
    await session.signOut();
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
                label="Bookings "
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
      <div
        className="loginSection"
        style={{
          width: show ? '75%' : '100%',
          marginTop: 100,
        }}
      >
        <h1>Sign Up Here</h1>
        <label htmlFor="username">
          <p>Enter your username</p>
          <input
            style={{
              width: show ? '200px' : '300px',
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username..."
          />
        </label>
        <label htmlFor="email">
          <p>Enter your email</p>
          <input
            style={{
              width: show ? '200px' : '300px',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email..."
          />
        </label>
        <label htmlFor="password">
          <p>Enter your password</p>
          <input
            style={{
              width: show ? '200px' : '300px',
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password..."
          />
        </label>
        <label htmlFor="password_confirmation">
          <p>Confirm your password</p>
          <input
            style={{
              width: show ? '200px' : '300px',
            }}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            placeholder="Password Confirmation..."
          />
        </label>
        <button
          style={{
            width: show ? '200px' : '300px',
          }}
          type="button"
          onClick={registerUser}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;

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

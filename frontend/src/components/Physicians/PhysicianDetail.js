import { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import PhysicianPage from './PhysicianPage';
import Logo from '../../assets/hamburger.png';
import BackArrow from '../../assets/left-arrow.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google-plus.png';
import Vimeo from '../../assets/vimeo.png';
import Pinterest from '../../assets/pinterest.png';

const PhysicianDetail = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('Doctors');
  const { physicianList } = useSelector((state) => state.physicians);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slide-container">
      <div className="subWindow">
        <div className="navigationWindow">
          {show ? (
            <div>
              <div className="navTop">
                <h3>Doctor Services</h3>
                <button type="button" onClick={() => setShow(!show)} className="returnArrow">
                  <img src={BackArrow} alt="back-arrow" className="backArrow" />
                </button>
              </div>
              <div className="navigationOptions">
                <ActiveTabs label="Doctors" path="/doctors" active={active} setActive={setActive} />
                <ActiveTabs label="Appointments" path="/appointments" active={active} setActive={setActive} />
                <ActiveTabs label="LOGIN" path="/login" active={active} setActive={setActive} />
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
        <div className="carouselWindow">
          <h1 className="sectionTitle">ALL AVAILABLE DOCTORS</h1>
          <p className="sectionMini">Please select a doctor</p>
          <Carousel responsive={responsive}>
            {physicianList.map((physician) => (
              <PhysicianPage
                key={physician.id}
                id={physician.id}
                name={physician.name}
                bio={physician.bio}
                specialization={physician.specialization}
                photo={physician.photo}
                city={physician.city}
                consultation_fee={physician.consultation_fee}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhysicianDetail;

const ActiveTabs = ({
  path,
  label,
  active,
  setActive,
}) => (
  <div className="optionLabel" style={{ backgroundColor: active === label ? 'rgb(113, 243, 27)' : 'white' }}>
    <button type="button" className="navButton" onClick={() => setActive(label)}>
      <a style={{ color: active === label ? 'white' : 'black', textDecoration: 'none' }} href={path}>{label}</a>
    </button>
  </div>
);

ActiveTabs.propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PhysicianPage from './PhysicianPage';

const PhysicianDetail = () => {
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
  );
};

export default PhysicianDetail;

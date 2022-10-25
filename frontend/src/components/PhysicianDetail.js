import { useSelector } from 'react-redux';
import PhysicianPage from './PhysicianPage';

const PhysicianDetail = () => {
  const { physicianList } = useSelector((state) => state.physicians);

  return (
    <div>
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
    </div>

  );
};

export default PhysicianDetail;

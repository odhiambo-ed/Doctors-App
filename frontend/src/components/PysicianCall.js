import { useSelector } from 'react-redux';
import Physician from './Physician';

const PhysicianCall = () => {
  const { physicianList } = useSelector((state) => state.physicians);
  const physicianDetail = physicianList.filter(({ show }) => show);
  console.log(physicianDetail);
  return (
    <section>
      <div>
        <Physician
          key={physicianDetail.id}
          id={physicianDetail.id}
          name={physicianDetail.name}
          bio={physicianDetail.bio}
          specialization={physicianDetail.specialization}
          photo={physicianDetail.photo}
          city={physicianDetail.city}
          consultation_fee={physicianDetail.consultation_fee}
        />
      </div>
    </section>
  );
};

export default PhysicianCall;

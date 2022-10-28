import { useSelector } from 'react-redux';
import AppointmentPage from './AppointmentPage';

const AppointmentDetail = () => {
  const { appointmentList } = useSelector((state) => state.appointments);
  return (
    <div className="appointment-list">
      {appointmentList.map((appointment) => (
        <AppointmentPage
          key={appointment.id}
          id={appointment.id}
          reason={appointment.reason}
          date={appointment.date}
          time={appointment.time}
        />
      ))}
    </div>
  );
};
export default AppointmentDetail;

import { useSelector } from 'react-redux';
import AppointmentPage from './AppointmentPage';
import './Appointment.css';

const AppointmentDetail = () => {
  const { appointmentList } = useSelector((state) => state.appointments);
  console.log(appointmentList);
  return (
    <div className="appointment-list">
      {appointmentList.map((appointment) => (
        <AppointmentPage
          key={appointment.id}
          id={appointment.id}
          reason={appointment.reason}
          date={appointment.date}
          time={appointment.time}
          doctor={appointment.physician_id}
        />
      ))}
    </div>
  );
};
export default AppointmentDetail;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../../redux/appointments/appointmentSlice';
import AppointmentDetail from './AppointmentDetail';
import './Appointment.css';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.appointments);
  useEffect(() => {
    async function fetchAllAppointments() {
      dispatch(fetchAppointments());
    }
    fetchAllAppointments();
  }, [dispatch]);
  return (
    <section>
      {loading && <h2>Loading...</h2>}
      {!loading && <AppointmentDetail />}
    </section>
  );
};
export default AppointmentsList;

/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/appointments';

const BookAppointmentForm = () => {
  const [state, setState] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setState(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      time: state.time,
      date: state.date,
      reason: state.reason,
      physician_id: location.state.physicianDetail[0].id,
      user_id: 1,
    };
    axios
      .post(baseURL, {
        appointment,
      })
      .then((response) => {
        console.log(response);
        const appointments = [...state.appointments, response.data];
        setState({ appointments });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">
          Date:
          <input
            type="text"
            name="date"
            id="appointmentDate"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="time">
          Time:
          <input
            type="text"
            name="time"
            id="appointmentTime"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="reason">
          consultation reason:
          <input
            type="text"
            id="appointmentReason"
            name="reason"
            required
            onChange={handleChange}

          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            placeholder={location.state.physicianDetail[0].name}
          />
        </label>
      </div>

      <button type="submit">
        Book Appointment
      </button>
    </form>

  );
};

export default BookAppointmentForm;

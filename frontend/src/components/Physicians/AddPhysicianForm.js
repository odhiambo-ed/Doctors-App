/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/physicians';

const AddPhysicianForm = () => {
  const [state, setState] = useState(null);
  const name = useRef();
  const bio = useRef();
  const specialization = useRef();
  const photo = useRef();
  const city = useRef();
  const consultationFee = useRef();

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setState(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const physician = {
      name: state.name,
      bio: state.bio,
      specialization: state.specialization,
      photo: state.photo,
      city: state.city,
      consultation_fee: state.consultation_fee,
    };
    axios({
      method: 'post',
      url: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        physician,
      },
    })
      .then((response) => {
        const physicians = [...state.physicians, response.data];
        setState({ physicians });

        name.current.value = '';
        bio.current.value = '';
        specialization.current.value = '';
        consultationFee.current.value = '';
        photo.current.value = '';
        city.current.value = '';
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
        <label htmlFor="name">
          Physician name:
          <input
            type="text"
            name="name"
            id="physicianName"
            required
            onChange={handleChange}
            ref={name}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="bio">
          Physician bio:
          <input
            type="text"
            name="bio"
            id="physicianBio"
            required
            onChange={handleChange}
            ref={bio}
          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="specialization">
          Physician specialization:
          <input
            type="text"
            id="physicianSpecialization"
            name="specialization"
            required
            onChange={handleChange}
            ref={specialization}

          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="consultation_fee">
          Physician consultation fee:
          <input
            type="text"
            id="physicianFee"
            name="consultation_fee"
            required
            onChange={handleChange}
            ref={consultationFee}

          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="photo">
          Physician photo:
          <input
            type="text"
            id="physicianPhoto"
            name="photo"
            required
            onChange={handleChange}
            ref={photo}
          />
        </label>
      </div>
      <div className="form-group">

        <label htmlFor="city">
          Physician city:
          <input
            type="text"
            id="physicianCity"
            name="city"
            required
            onChange={handleChange}
            ref={city}

          />
        </label>
      </div>

      <button type="submit">
        Add Physician
      </button>
    </form>

  );
};

export default AddPhysicianForm;

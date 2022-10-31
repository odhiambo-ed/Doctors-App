/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/physicians';

const AddPhysicianForm = () => {
  const [state, setState] = useState(null);

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
    axios
      .post(baseURL, {
        physician,
      })
      .then((response) => {
        console.log(response);
        const physicians = [...state.physicians, response.data];
        setState({ physicians });
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

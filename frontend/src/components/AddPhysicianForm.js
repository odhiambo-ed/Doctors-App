/* eslint-disable camelcase */
import React from 'react';

const AddPhysicianForm = () => (
  <form>
    <label htmlFor="name">
      Name:
      <input type="text" id="name" />
    </label>
    <label htmlFor="specialization">
      Specialization:
      <input type="text" id="specialization" />
    </label>
    <label htmlFor="location">
      Location:
      <input type="text" id="location" />
    </label>
    <label htmlFor="fee">
      Consultation Fee:
      <input type="text" id="fee" />
    </label>
    <label htmlFor="bio">
      Bio:
      <input type="text" id="bio" />
    </label>
    <label htmlFor="photo">
      Photo:
      <input type="text" id="photo" />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default AddPhysicianForm;

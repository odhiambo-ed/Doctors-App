import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhysicians } from '../../redux/physicians/physicianSlice';
import PhysicianDetail from './PhysicianDetail';
import './Physician.css';

const PhysiciansList = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.physicians);

  useEffect(() => {
    async function fetchAllPhysicians() {
      dispatch(fetchPhysicians());
    }

    fetchAllPhysicians();
  }, [dispatch]);

  return (
    <section>
      {loading
        && (<h2>Loading...</h2>)}
      {!loading && (<PhysicianDetail />)}
    </section>
  );
};

export default PhysiciansList;

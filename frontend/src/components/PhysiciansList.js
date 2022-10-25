import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhysicians } from '../redux/physicians/physicianSlice';
import PhysicianDetail from './PhysicianDetail';

const Physicians = () => {
  const dispatch = useDispatch();

  const { loading, physiciansList } = useSelector((state) => state.physicians);

  useEffect(() => {
    if (physiciansList.length === 0) {
      dispatch(fetchPhysicians());
    }
  }, [dispatch]);

  return (
    <section>
      {loading
        && (<h2>Loading...</h2>)}
      {!loading && (<PhysicianDetail />)}
    </section>
  );
};

export default Physicians;
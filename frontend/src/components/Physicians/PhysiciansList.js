import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
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
  }, []);

  return (
    <section>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
      {!loading && <PhysicianDetail />}
    </section>
  );
};

export default PhysiciansList;

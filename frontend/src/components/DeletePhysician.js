import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeletePhysiciansList from './DeletePhysiciansList';
import { fetchPhysicians } from '../redux/physicians/physicianSlice';

const DeletePhysician = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAllPhysicians() {
      dispatch(fetchPhysicians());
    }
    fetchAllPhysicians();
  }, []);
  const { physicianList } = useSelector((state) => state.physicians);
  return (
    <div className="doctors-list">
      {physicianList.map((physician) => (
        <DeletePhysiciansList
          key={physician.id}
          id={physician.id}
          name={physician.name}
          specialization={physician.specialization}
          photo={physician.photo}
        />
      ))}
    </div>
  );
};
export default DeletePhysician;

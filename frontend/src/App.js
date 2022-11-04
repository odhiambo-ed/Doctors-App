import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import PhysiciansList from './components/Physicians/PhysiciansList';
import Physician from './components/Physicians/Physician';
import AddPhysicianForm from './components/Physicians/AddPhysicianForm';
import DeletePhysician from './components/Physicians/DeletePhysician';
import BookAppointmentForm from './components/Appointments/BookAppointmentForm';
import AppointmentsList from './components/Appointments/AppointmentsList';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './components/Navbar.css';
import useAuth from './state';

const App = () => {
  const [user, setUser] = useState(null);
  const session = useAuth();
  useEffect(() => {
    (async () => {
      const current = await session.currentUser;
      setUser(current.id);
    })();
  }, [session]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<PhysiciansList />} />
            <Route path="/doctors" element={<PhysiciansList />} />
            <Route
              path="/login"
              element={user === null ? <Login /> : <Navigate to="/" replace />}
            />
            <Route
              path="/register"
              element={
                user === null ? <Register /> : <Navigate to="/" replace />
              }
            />
            <Route path="/appointments" element={<AppointmentsList />} />
            <Route path="/doctors/:id" element={<Physician />} />
            <Route path="/doctors/new" element={<AddPhysicianForm />} />
            <Route path="/doctors/delete" element={<DeletePhysician />} />
            <Route path="/doctors/book" element={<BookAppointmentForm />} />
            <Route path="/doctors/:id/book" element={<BookAppointmentForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

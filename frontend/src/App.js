import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PhysiciansList from './components/PhysiciansList';
import Physician from './components/Physician';
import AddPhysicianForm from './components/AddPhysicianForm';
import DeletePhysician from './components/DeletePhysician';
import BookAppointmentForm from './components/BookAppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import './components/Navbar.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<PhysiciansList />} />
            <Route path="/doctors" element={<PhysiciansList />} />
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
}
export default App;

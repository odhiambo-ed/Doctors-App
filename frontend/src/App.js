import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PhysiciansList from './components/PhysiciansList';
// import Book from './components/Book'
// import DoctorsList from './components/DoctorsList'
import './components/Navbar.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/doctors" element={<PhysiciansList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Profile from './components/ProfilePage';
import AttendancePage from './components/AttendancePage'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import AboutUsPage from './components/About'; 
import ContactPage from './components/Contact'; 
import PayrollPage from './components/Payroll'; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      
        <Navbar />

        <main className="flex-1 overflow-auto pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/attendance" element={<AttendancePage />} /> 
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

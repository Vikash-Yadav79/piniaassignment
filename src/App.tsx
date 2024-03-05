import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Changed import
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} /> 
          <ProtectedRoute path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/" element={<SignInPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssignPage from './pages/AssignPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/assign" element={<AssignPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FacultyList from './components/FacultyList';
import FacultyDetails from './components/FacultyDetails';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<FacultyList/>} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
      </Routes>
    </Router>
  </>
);

export default App;

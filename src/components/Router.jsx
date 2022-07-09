import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components imports
import Home from './Home';

function Router() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/resume/experience" element={<Home />} />
      <Route exact path="/resume/education" element={<Home />} />
      <Route exact path="/resume/skills" element={<Home />} />
      <Route exact path="/reachme" element={<Home />} />

      {/* redirect wrong URLs to /home */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Router;

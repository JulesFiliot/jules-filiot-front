import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components imports
import Home from './Home';
import Resume from './Resume';
import ReachMe from './ReachMe';

function Router() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route exact path="/reachme" element={<ReachMe />} />

      {/* redirect wrong URLs to root */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Router;

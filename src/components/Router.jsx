import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components imports
import Home from './Home';

function Router() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />

      {/* redirect wrong URLs to /home */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Router;

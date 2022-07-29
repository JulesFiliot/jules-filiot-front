import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components imports
import Home from './Home';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      {/* redirect wrong URLs to root */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;

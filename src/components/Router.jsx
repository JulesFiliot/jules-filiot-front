import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHasFullView } from '../actions/dataActions';

// components imports
import Home from './Home';
import Resume from './Resume';
import ReachMe from './ReachMe';

function Router() {
  const dispatch = useDispatch();
  const location = useLocation();
  const hasFullView = useSelector((state) => state.hasFullView);

  useEffect(() => {
    if (hasFullView && !['/', '/home'].includes(location.pathname)) {
      dispatch(setHasFullView(false));
    }
  }, [hasFullView, location]);

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

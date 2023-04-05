import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from '../actions/dataActions';

import '../styles/fullViewLoader.scss';

function FullViewLoader({ children }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    if (!data) {
      dispatch(fetchAllData());
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [data]);

  if (error) {
    return <div className="loader-container"><span>Error :(</span></div>;
  }
  if (showLoader || loading || !data) {
    return <div className="loader-container"><span>Loading...</span></div>;
  }

  return children;
}
FullViewLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullViewLoader;

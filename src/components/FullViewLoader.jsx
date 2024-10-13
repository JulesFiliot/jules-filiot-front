import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './UI/Loader';
import { fetchAllData } from '../actions/dataActions';

import '../styles/fullViewLoader.scss';

function FullViewLoader({ children }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    if (!data) {
      dispatch(fetchAllData());
    }
  }, [data]);

  if (error) {
    return <div className="loader-container"><span>Error :(</span></div>;
  }
  if (loading) {
    return (
      <div className="loader-container"><Loader /></div>
    );
  }

  return children;
}
FullViewLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullViewLoader;

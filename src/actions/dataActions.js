import { getAllCategories } from '../api/categories';
import getMyInfo from '../api/myInfo';
import { getAllPanels } from '../api/panels';
import { getAllProjects } from '../api/project';

export const FETCH_ALL_DATA_REQUEST = 'FETCH_ALL_DATA_REQUEST';
export const FETCH_ALL_DATA_SUCCESS = 'FETCH_ALL_DATA_SUCCESS';
export const FETCH_ALL_DATA_FAILURE = 'FETCH_ALL_DATA_FAILURE';

export const fetchAllDataRequest = () => ({ type: FETCH_ALL_DATA_REQUEST });
export const fetchAllDataSuccess = (data) => ({ type: FETCH_ALL_DATA_SUCCESS, payload: data });
export const fetchAllDataFailure = (error) => ({ type: FETCH_ALL_DATA_FAILURE, payload: error });

const getAllData = () => Promise
  .all([getMyInfo(), getAllCategories(), getAllPanels(), getAllProjects()])
  .then((values) => ({
    myInfo: values[0][0],
    categories: values[1],
    panels: values[2],
    projects: values[3],
  }));

export const fetchAllData = () => async (dispatch) => {
  dispatch(fetchAllDataRequest());

  try {
    const data = await getAllData();
    dispatch(fetchAllDataSuccess(data));
  } catch (error) {
    dispatch(fetchAllDataFailure(error));
  }
};

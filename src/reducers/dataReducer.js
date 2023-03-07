import {
  FETCH_ALL_DATA_REQUEST,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_ALL_DATA_FAILURE,
} from '../actions/dataActions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ALL_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

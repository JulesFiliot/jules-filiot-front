import dataReducer from '../../reducers/dataReducer';
import {
  FETCH_ALL_DATA_REQUEST,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_ALL_DATA_FAILURE,
  SET_HAS_FULL_VIEW,
} from '../../actions/dataActions';

describe('dataReducer', () => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
    hasFullView: true,
  };

  it('should return the initial state when no action type matches', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(dataReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle FETCH_ALL_DATA_REQUEST', () => {
    const action = { type: FETCH_ALL_DATA_REQUEST };
    const expectedState = { ...initialState, loading: true };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_ALL_DATA_SUCCESS', () => {
    const mockData = {
      myInfo: {}, categories: [], panels: [], projects: [],
    };
    const action = { type: FETCH_ALL_DATA_SUCCESS, payload: mockData };
    const expectedState = { ...initialState, loading: false, data: mockData };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_ALL_DATA_FAILURE', () => {
    const mockError = new Error('Failed to fetch data');
    const action = { type: FETCH_ALL_DATA_FAILURE, payload: mockError };
    const expectedState = { ...initialState, loading: false, error: mockError };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_HAS_FULL_VIEW', () => {
    const action = { type: SET_HAS_FULL_VIEW, payload: false };
    const expectedState = { ...initialState, hasFullView: false };
    expect(dataReducer(initialState, action)).toEqual(expectedState);
  });
});

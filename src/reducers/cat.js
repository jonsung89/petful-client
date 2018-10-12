
import { FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, ADOPT_CAT_REQUEST, ADOPT_CAT_SUCCESS, ADOPT_CAT_ERROR, FETCH_CAT_REQUEST } from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const catReducer = (state = initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, { data: action.cat, loading: false });
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  } else if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, { loading: false });
  } else if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  }
}
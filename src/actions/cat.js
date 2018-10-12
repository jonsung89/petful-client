import {API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const fetchCat = () => dispatch => { 
  fetch(`${ API_BASE_URL }/cat`)
    .then(res => { 
      if (!res.ok) { 
        return Promise.reject(res.statusText);  
      } 
      return res.json(); 
    })
    .then(cat => { 
      dispatch(fetchCatSuccess(cat)); 
    }); 
};

export const adoptCat = () => dispatch => { 
  dispatch(adoptCatRequest())
  fetch(`${ API_BASE_URL }/cat`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(res => { 
      if (!res.ok) { 
        return Promise.reject(res.statusText);  
      } 
      return res.json(); 
    })
  .then(() => { 
      dispatch(adoptCatRequest())
      dispatch(fetchCat()); 
    }); 
};
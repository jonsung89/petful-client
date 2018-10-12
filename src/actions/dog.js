import { API_BASE_URL } from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
})

export const fetchDog = () => dispatch => {
  fetch(`${API_BASE_URL}/dog`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(dog => {
      dispatch(fetchDogSuccess(dog));
    });
};

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest())
  fetch(`${API_BASE_URL}/dog`, {
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
      dispatch(adoptDogRequest())
      dispatch(fetchDog());
    });
};
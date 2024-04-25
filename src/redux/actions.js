import axios from 'axios';

import * as actionTypes from './ActionTypes';



export const fetchPhotosRequest = () => ({
     type: actionTypes.FETCH_PHOTOS_REQUEST
});

export const fetchPhotosSuccess = (photos) => ({
     type: actionTypes.FETCH_PHOTOS_SUCCESS,
     payload: photos
});

export const fetchPhotosFailure = (error) => ({
     type: actionTypes.FETCH_PHOTOS_FAILURE,
     payload: error
});

export const fetchPhotos = () => {
     return async (dispatch) => {
          dispatch(fetchPhotosRequest());
          try {
               
               const response = await axios.get('https://image-pulse-44040-default-rtdb.firebaseio.com/photos.json');
               dispatch(fetchPhotosSuccess(response.data));
          } catch (error) {
               dispatch(fetchPhotosFailure(error));
          }
     };
};

export const fetchFeedbackRequest = () => ({
     type: actionTypes.FETCH_FEEDBACK_REQUEST
});

export const fetchFeedbackSuccess = (feedbacks) => ({
     type: actionTypes.FETCH_FEEDBACK_SUCCESS,
     payload: feedbacks
});

export const fetchFeedbackFailure = (error) => ({
     type: actionTypes.FETCH_FEEDBACK_FAILURE,
     payload: error
});

export const fetchFeedback = () => {
     return async (dispatch) => {
          dispatch(fetchFeedbackRequest());
          try {
               const response = await axios.get('https://image-pulse-44040-default-rtdb.firebaseio.com/feedbacks.json');
               dispatch(fetchFeedbackSuccess(response.data));
               // console.log(response.data);
          } catch (error) {
               dispatch(fetchFeedbackFailure(error));
          }
     };
};


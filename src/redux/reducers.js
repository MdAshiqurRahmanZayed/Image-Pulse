import * as actionTypes from './ActionTypes';


const initialState = {
     photos: [],
     feedbacks: [],
     isLoading: false,
     error: null
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
          case actionTypes.FETCH_PHOTOS_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                         error: null
               };
          case actionTypes.FETCH_PHOTOS_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    photos: action.payload,
                    error: null,
                    
               };
          case actionTypes.FETCH_PHOTOS_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    error: action.payload
               };
          //Auth Cases
          case actionTypes.AUTH_SUCCESS:
               return {
                    ...state,
                    token: action.payload.token,
                    userId: action.payload.userId,
               }
          case actionTypes.AUTH_LOGOUT:
               return {
                    ...state,
                    authFailedMsg: null,
                    token: null,
                    userId: null,
               }
          case actionTypes.AUTH_LOADING:
               return {
                    ...state,
                    authLoading: action.payload,
               }
          case actionTypes.AUTH_FAILED:
               return {
                    ...state,
                    authFailedMsg: action.payload,
               }


          case actionTypes.FETCH_FEEDBACK_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                    error: null
               };


          case actionTypes.FETCH_FEEDBACK_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    feedbacks: action.payload,
                    error: null,
               };
          case actionTypes.FETCH_FEEDBACK_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    error: action.payload
               }
          default:
               return state;
     }
};

export default reducer;

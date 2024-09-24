import {
  EDIT_USER,
  GET_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOGIN_USER,
  SET_PAGE,
  LOGOUT_USER,
} from "./types";

const initialState = {
  cart: [],
  user: [],
  login: false,
  currentPage: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_USER:
      return {
        ...state,
        user: payload,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        user: payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        login: false,
        cart: [],
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
      
    default:
      return { ...state };
  }
};

export default rootReducer;

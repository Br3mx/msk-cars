import axios from "axios";
import { API_URL } from "../config";
import initialState from "./initialState";
//action

export const getPhone = (state) => state.common.phoneNumber;
export const getAddress = (state) => state.common.address;
export const getRole = (state) => state.common.user;
export const getPromotion = (state) => state.common.promotion.promotionImg.data;
const createActionName = (name) => `app/login/${name}`;

export const LOAD_PROM = createActionName("LOAD_PROM");
export const ERROR = createActionName("ERROR");

export const LOGIN_USER = createActionName("LOGIN_USER");
export const LOGOUT_USER = createActionName("LOGOUT_USER");

export const loadProm = (payload) => ({ type: LOAD_PROM, payload });
export const setError = (payload) => ({ type: ERROR, payload });

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = (payload) => ({
  type: LOGOUT_USER,
  payload,
});

export const loadPromotionRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/promotions`);
    dispatch(loadProm(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    case LOAD_PROM:
      return {
        ...state,
        promotion: { promotionImg: { data: action.payload } },
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        role: null,
      };
    default:
      return state;
  }
}

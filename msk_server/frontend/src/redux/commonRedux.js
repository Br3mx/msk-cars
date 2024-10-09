import axios from "axios";
import { API_URL } from "../config";
import initialState from "./initialState";
import { isUUID } from "validator";

//action

export const getPhone = (state) => state.common.phoneNumber;
export const getAddress = (state) => state.common.address;
export const getRole = (state) => state.common.user;
export const getPromotion = (state) => state.common.promotion.promotionImg.data;
const createActionName = (name) => `app/login/${name}`;
const createActionName2 = (name) => `app/promotions/${name}`;

export const LOAD_PROM = createActionName2("LOAD_PROM");
export const ERROR = createActionName("ERROR");

export const ADD_PROM = createActionName2("ADD_PROM");
export const DELETE_PROM = createActionName2("DELETE_PROM");

export const LOGIN_USER = createActionName("LOGIN_USER");
export const LOGOUT_USER = createActionName("LOGOUT_USER");

export const loadProm = (payload) => ({ type: LOAD_PROM, payload });
export const setError = (payload) => ({ type: ERROR, payload });

export const addProm = (newProm) => ({
  type: ADD_PROM,
  payload: newProm,
});

export const deletePromSuccess = (payload) => ({
  type: DELETE_PROM,
  payload,
});

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

export const addPromotion = (fileData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/promotions/upload`, fileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(addProm(res.data.promotion));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const deleteProm = (id) => async (dispatch) => {
  // Sprawdź, czy id jest prawidłowym UUID
  if (typeof id !== "string") {
    dispatch(setError("ID must be a string"));
    return;
  }

  if (!isUUID(id)) {
    dispatch(setError("Invalid UUID format"));
    return;
  }

  try {
    await axios.delete(`${API_URL}/promotions/${id}`);
    dispatch(deletePromSuccess(id));
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
    case DELETE_PROM:
      return {
        ...state,
        promotion: {
          promotionImg: {
            data: [],
          },
        },
      };
    case ADD_PROM:
      return {
        ...state,
        promotion: {
          promotionImg: {
            data: [...state.promotion.promotionImg.data, action.payload],
          },
        },
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

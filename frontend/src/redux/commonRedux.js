import initialState from "./initialState";
//action

export const getPhone = (state) => state.common.phoneNumber;
export const getAddress = (state) => state.common.address;
export const getRole = (state) => state.common.user;

const createActionName = (name) => `app/login/${name}`;

export const LOGIN_USER = createActionName("LOGIN_USER");
export const LOGOUT_USER = createActionName("LOGOUT_USER");

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = (payload) => ({
  type: LOGOUT_USER,
  payload,
});

export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
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

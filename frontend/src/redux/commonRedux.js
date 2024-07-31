import initialState from "./initialState";
//action

export const getPhone = (state) => state.common.phoneNumber;
export const getAddress = (state) => state.common.address;

const createActionName = (name) => `app/login/${name}`;

export const LOGIN_USER = createActionName("LOGIN_USER");

export const loginUser = (role) => ({
  type: LOGIN_USER,
  payload: role,
});

export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
}

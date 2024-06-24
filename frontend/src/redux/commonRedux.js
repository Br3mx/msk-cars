import initialState from "./initialState";
//action

export const getPhone = (state) => state.common.phoneNumber;
export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

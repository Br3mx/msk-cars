import initialState from "./initialState";
//action

export const getPhone = (state) => state.common.phoneNumber;
export const getAddress = (state) => state.common.address;
export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

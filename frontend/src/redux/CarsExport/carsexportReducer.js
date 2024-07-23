import { API_URL } from "../../config";
import initialState from "../initialState";
import axios from "axios";
//action

export const getFirstSection2 = (state) => state.carsExport.firstSection2;
export const getSecondSection2 = (state) => state.carsExport.secondSection2;
export const getThirdSection2 = (state) => state.carsExport.thirdSection2;
export const getFourthSection2 = (state) => state.carsExport.fourthSection2;

/*export const getRealization = (state) =>
  state.detailing.realization.carsDetailing.data;
export const getCarById = ({ detailing }, id) =>
  detailing.realization.carsDetailing.data.find(
    (carDetailing) => carDetailing.id === id
  );
// actions
const createActionName = (name) => `app/carsexport/${name}`;

export const ERROR = createActionName("ERROR");
export const LOAD_EXP = createActionName("LOAD_EXP");

export const loadExp = (payload) => ({ type: LOAD_DET, payload });
export const setError = (payload) => ({ type: ERROR, payload });

// thunk

export const loadCarExportRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/carexport`);
    dispatch(loadCar(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};
*/
export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

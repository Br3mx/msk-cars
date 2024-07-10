import { API_URL } from "../../config";
import initialState from "../initialState";
import axios from "axios";
//action

export const getFirstSection = (state) => state.detailing.firstSection;
export const getSecondSection = (state) => state.detailing.secondSection;
export const getThirdSection = (state) => state.detailing.thirdSection;
export const getFourthSection = (state) => state.detailing.fourthSection;
export const getOffer = (state) => state.detailing.offer;

export const getRealization = (state) =>
  state.detailing.realization.carsDetailing.data;
export const getCarById = ({ detailing }, id) =>
  detailing.realization.carsDetailing.data.find(
    (carDetailing) => carDetailing.id === id
  );
// actions
const createActionName = (name) => `app/detailing/${name}`;

export const ERROR = createActionName("ERROR");
export const LOAD_DET = createActionName("LOAD_DET");

export const loadDet = (payload) => ({ type: LOAD_DET, payload });
export const setError = (payload) => ({ type: ERROR, payload });

// thunk

export const loadDetRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/detailing`);
    dispatch(loadDet(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export default function reducer(state = [initialState], action = {}) {
  switch (action.type) {
    case LOAD_DET:
      return {
        ...state,
        realization: { carsDetailing: { data: action.payload } },
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

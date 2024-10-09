import { API_URL } from "../../config";
import initialState from "../initialState";
import axios from "axios";
import { isUUID } from "validator";

// selectors
export const getFirstSection = (state) => state.detailing.firstSection;
export const getSecondSection = (state) => state.detailing.secondSection;
export const getThirdSection = (state) => state.detailing.thirdSection;
export const getFourthSection = (state) => state.detailing.fourthSection;
export const getOffer = (state) => state.detailing.offer;
export const getAbout = (state) => state.detailing.about;

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
export const DELETE_REALIZATION = createActionName("DELETE_REALIZATION");
export const EDIT_REALIZATION = createActionName("EDIT_REALIZATION");
export const ADD_REALIZATION = createActionName("ADD_REALIZATION");

// Add new action creator
export const addRealization = (newRealization) => ({
  type: ADD_REALIZATION,
  payload: newRealization,
});
export const loadDet = (payload) => ({ type: LOAD_DET, payload });
export const setError = (payload) => ({ type: ERROR, payload });
export const deleteRealizationSuccess = (payload) => ({
  type: DELETE_REALIZATION,
  payload,
});
export const editRealization = (id, newData) => ({
  type: EDIT_REALIZATION,
  payload: { id, newData },
});

// thunks
export const loadDetRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/detailing`);
    dispatch(loadDet(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const deleteRealizationD = (id) => async (dispatch) => {
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
    await axios.delete(`${API_URL}/detailing/delete/${id}`);
    dispatch(deleteRealizationSuccess(id));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

// thunks.js
export const editRealizationD = (id, newData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("carMark", newData.carMark);
    formData.append("description", JSON.stringify(newData.description));
    formData.append("restImgToDelete", JSON.stringify(newData.restImgToDelete));

    if (newData.img instanceof File) {
      formData.append("img", newData.img);
    }

    const restImgArray = Array.isArray(newData.restImg) ? newData.restImg : [];
    restImgArray.forEach((img, index) => {
      if (img instanceof File) {
        formData.append("restImg", img);
      }
    });

    await axios.put(`${API_URL}/detailing/update-detailing/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(editRealization(id, newData));
  } catch (e) {
    console.error("Error updating:", e);
    dispatch(setError(e.message));
  }
};

// thunks.js

export const addRealizationD = (newRealizationData) => async (dispatch) => {
  try {
    // Prepare form data
    const formData = new FormData();
    formData.append("carMark", newRealizationData.carMark);
    formData.append(
      "description",
      JSON.stringify(newRealizationData.description)
    );

    if (newRealizationData.img instanceof File) {
      formData.append("img", newRealizationData.img);
    }

    const restImgArray = Array.isArray(newRealizationData.restImg)
      ? newRealizationData.restImg
      : [];
    restImgArray.forEach((img, index) => {
      if (img instanceof File) {
        formData.append("restImg", img);
      }
    });

    const response = await axios.post(
      `${API_URL}/detailing/admin/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch(addRealization(response.data)); // Dispatch the action with the new realization data
  } catch (e) {
    console.error("Error adding realization:", e);
    dispatch(setError(e.message)); // Handle errors
  }
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_DET:
      return {
        ...state,
        realization: { carsDetailing: { data: action.payload } },
      };
    case DELETE_REALIZATION:
      return {
        ...state,
        realization: {
          carsDetailing: {
            data: state.realization.carsDetailing.data.filter(
              (re) => re.id !== action.payload
            ),
          },
        },
      };
    case EDIT_REALIZATION:
      const { id, newData } = action.payload;
      return {
        ...state,
        realization: {
          carsDetailing: {
            data: state.realization.carsDetailing.data.map((re) =>
              re.id === id ? { ...re, ...newData } : re
            ),
          },
        },
      };
    case ADD_REALIZATION:
      return {
        ...state,
        realization: {
          carsDetailing: {
            data: [...state.realization.carsDetailing.data, action.payload],
          },
        },
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

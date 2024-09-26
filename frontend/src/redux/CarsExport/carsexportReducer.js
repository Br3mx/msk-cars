import { API_URL } from "../../config";
import initialState from "../initialState";
import axios from "axios";
import { isUUID } from "validator";
//action

export const getFirstSection2 = (state) => state.carsExport.firstSection2;
export const getSecondSection2 = (state) => state.carsExport.secondSection2;
export const getThirdSection2 = (state) => state.carsExport.thirdSection2;
export const getFourthSection2 = (state) => state.carsExport.fourthSection2;

export const getRealization2 = (state) =>
  state.carsExport.realization.carsExport.data;
export const getCarById2 = ({ carsExport }, id) =>
  carsExport.realization.carsExport.data.find(
    (carsExport) => carsExport.id === id
  );

// actions
const createActionName = (name) => `app/cars-export/${name}`;

export const ERROR = createActionName("ERROR");
export const LOAD_EXP = createActionName("LOAD_EXP");
export const DELETE_REALIZATION_EXP = createActionName(
  "DELETE_REALIZATION_EXP"
);
export const EDIT_REALIZATION_EXP = createActionName("EDIT_REALIZATION_EXP");
export const ADD_REALIZATION_EXP = createActionName("ADD_REALIZATION_EXP");

// Add new action creator
export const addRealizationExp = (newRealizationExp) => ({
  type: ADD_REALIZATION_EXP,
  payload: newRealizationExp,
});
export const loadExp = (payload) => ({ type: LOAD_EXP, payload });
export const setError = (payload) => ({ type: ERROR, payload });
export const deleteRealizationSuccesseXP = (payload) => ({
  type: DELETE_REALIZATION_EXP,
  payload,
});
export const editRealizationExp = (id, newDataExp) => ({
  type: EDIT_REALIZATION_EXP,
  payload: { id, newDataExp },
});

// thunks
export const loadExpRequest = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/export`);
    dispatch(loadExp(res.data));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const deleteRealizationExp = (id) => async (dispatch) => {
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
    await axios.delete(`${API_URL}/export/delete/${id}`);
    dispatch(deleteRealizationSuccesseXP(id));
  } catch (e) {
    dispatch(setError(e.message));
  }
};

// thunks.js
export const editRealizationExport = (id, newDataExp) => async (dispatch) => {
  try {
    // Prepare form data
    const formData = new FormData();
    formData.append("carMark", newDataExp.carMark);
    formData.append("description", JSON.stringify(newDataExp.description));
    formData.append(
      "restImgToDelete",
      JSON.stringify(newDataExp.restImgToDelete)
    );

    if (newDataExp.img instanceof File) {
      formData.append("img", newDataExp.img);
    }

    const restImgArray = Array.isArray(newDataExp.restImg)
      ? newDataExp.restImg
      : [];
    restImgArray.forEach((img, index) => {
      if (img instanceof File) {
        formData.append("restImg", img);
      }
    });

    const response = await axios.put(
      `${API_URL}/export/update-export/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(editRealizationExp(id, newDataExp));
  } catch (e) {
    console.error("Error updating:", e);
    dispatch(setError(e.message));
  }
};

// thunks.js

export const addRealizationExport =
  (newRealizationDataExp) => async (dispatch) => {
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("carMark", newRealizationDataExp.carMark);
      formData.append(
        "description",
        JSON.stringify(newRealizationDataExp.description)
      );

      if (newRealizationDataExp.img instanceof File) {
        formData.append("img", newRealizationDataExp.img);
      }

      const restImgArray = Array.isArray(newRealizationDataExp.restImg)
        ? newRealizationDataExp.restImg
        : [];
      restImgArray.forEach((img, index) => {
        if (img instanceof File) {
          formData.append("restImg", img);
        }
      });

      const response = await axios.post(
        `${API_URL}/export/admin/create/export`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(addRealizationExp(response.data)); // Dispatch the action with the new realization data
    } catch (e) {
      console.error("Error adding realization:", e);
      dispatch(setError(e.message)); // Handle errors
    }
  };

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_EXP:
      return {
        ...state,
        realization: { carsExport: { data: action.payload } },
      };
    case DELETE_REALIZATION_EXP:
      return {
        ...state,
        realization: {
          carsExport: {
            data: state.realization.carsExport.data.filter(
              (re) => re.id !== action.payload
            ),
          },
        },
      };
    case EDIT_REALIZATION_EXP:
      const { id, newDataExp } = action.payload;
      return {
        ...state,
        realization: {
          carsExport: {
            data: state.realization.carsExport.data.map((re) =>
              re.id === id ? { ...re, ...newDataExp } : re
            ),
          },
        },
      };
    case ADD_REALIZATION_EXP:
      return {
        ...state,
        realization: {
          carsExport: {
            data: [...state.realization.carsExport.data, action.payload],
          },
        },
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

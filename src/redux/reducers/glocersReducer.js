import { glocersTypes } from "../types/glocersTypes";

export const glocersReducer = (state = {}, action) => {
  switch (action.type) {
    case glocersTypes.GET_GLOCERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
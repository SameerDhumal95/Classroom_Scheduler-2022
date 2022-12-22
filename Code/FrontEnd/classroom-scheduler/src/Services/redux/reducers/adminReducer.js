import { adminActionTypes } from "../constants/adminActionTypes";

const initialState = {
  user: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case adminActionTypes.ADMIN_LOGIN_REQUEST:
      return { ...state, user: payload };

    default:
      return state;
  }
};

// export default adminReducer;

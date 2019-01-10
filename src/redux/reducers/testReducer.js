import { TEST_BOOL_TOGGLE } from "./actionTypes";

const initialState = {
    testBool: false
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_BOOL_TOGGLE: {
      return {
          ...state,
          testBool: !state.testBool
      };
    }
    default: {
      return state;
    }
  }
};

export default testReducer;

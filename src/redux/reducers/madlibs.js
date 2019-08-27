
import { SUBMIT_FIELD, IS_COMPLETE, RESET_LIBS } from '../actions/types';

export const INITIAL_STATE = {

};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case SUBMIT_FIELD: {
    //   const { fieldAnswers, templates } = action.payload;
    //   return {
    //     ...state,
    //     fieldAnswers: [...fieldAnswers],
    //     templates: [...templates],
    //   };
    // }

    // case IS_COMPLETE: {
    //   return { ...state, showComplete: true };
    // }

    // case RESET_LIBS: {
    //   return {
    //     ...state,
    //     showComplete: false,
    //     fieldAnswers: [],
    //     templates: [],
    //   };
    // }

    default:
      return state;
  }
}

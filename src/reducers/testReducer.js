import {DATE_FETCH_STARTED} from '../../actions/Types';
import {DATE_FETCH_SUCCESS} from '../../actions/Types';
import {DATE_FETCH_FAIL} from '../../actions/Types';
const INITIAL_STATE = {
  isLoading: true,
  dateData: {
    currently: {},
    daily: {
      data: [],
    },
  },
};
export const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATE_FETCH_STARTED: {
      return {
        ...state,
        isLoading: state.isLoading,
      };
    }
    case DATE_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: (state.isLoading = false),
        dateData: (state.dateData = action.payload),
      };
    }
    case DATE_FETCH_FAIL: {
      return {
        ...state,
        isLoading: (state.isLoading = false),
      };
    }

    default: {
      return state;
    }
  }
};

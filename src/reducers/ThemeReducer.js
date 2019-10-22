import {SET_THEME} from '../../actions/Types';

const INITIAL_STATE = {
  theme: '#87ceeb',
};
export const ThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

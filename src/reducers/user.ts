import { AnyAction } from 'redux';

interface Action {
  type: string;
}

export const initialState = {};

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

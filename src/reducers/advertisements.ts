interface Action {
  type: string;
}

export const initialState = {};

// eslint-disable-next-line @typescript-eslint/default-param-last
const advertisementsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default advertisementsReducer;

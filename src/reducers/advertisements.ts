interface Action {
  type: string;
}

export const initialState = {};

const advertisementsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default advertisementsReducer;

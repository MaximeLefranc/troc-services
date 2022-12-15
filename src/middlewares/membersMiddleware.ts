import { Middleware } from 'redux';

const membersMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default membersMiddleware;

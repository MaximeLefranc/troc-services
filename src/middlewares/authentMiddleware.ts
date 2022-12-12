import { Middleware } from 'redux';

const authentMiddleware: Middleware = (store) => (next) => (action) => {
  return next(action);
};

export default authentMiddleware;

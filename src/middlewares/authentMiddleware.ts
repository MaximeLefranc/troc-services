import { Middleware } from 'redux';

const authentMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
};

export default authentMiddleware;

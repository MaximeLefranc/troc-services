const authentMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action);
};

export default authentMiddleware;

export function getDataMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      return next(action);
    };
  };
}
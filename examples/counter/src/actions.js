export const incrementCounter = function() {
  return { type: "INCREMENT" };
};
export const decrementCounter = function() {
  return { type: "DECREMENT" };
};
export const fetchData = function(payload) {
  return dispatch => {
    setTimeout(function() {
      dispatch(incrementCounter());
    }, 1000);
  };
};

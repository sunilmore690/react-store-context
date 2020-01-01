import React, { useReducer } from "react";
const StoreContext = React.createContext({});
export const StoreProvider = function(props) {
  
  const [state, dispatch] = useReducer(props.reducer, props.initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};
export const StoreConsumer = StoreContext.Consumer;
export default StoreContext;

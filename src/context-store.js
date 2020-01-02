import React, { useReducer, useContext } from "react";
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
export const connect = function(mapStateToProps, mapDisptachToProps) {
  return function(Component) {
    return function(componentProps) {
      let [state, dispatch] = useContext(StoreContext);
      let actionProps = {};
      Object.keys(mapDisptachToProps).forEach(key => {
        actionProps[key] = function(payload) {
          if (typeof mapDisptachToProps[key]() == "function") {
            mapDisptachToProps[key](payload)(dispatch);
          } else {
            dispatch(mapDisptachToProps[key](payload));
          }
        };
      });
      let props = mapStateToProps(state, componentProps);
      return <Component {...componentProps} {...props} {...actionProps} />;
    };
  };
};

import React, { useContext } from "react";
import StoreContext from "./context-store";

function Counter() {
  let [state, dispatch] = useContext(StoreContext);
  return (
    <div>
      Counter: {state} <br />
      <button onClick={e => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={e => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
export default Counter;

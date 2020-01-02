import React, { useContext } from "react";
import { connect } from "./context-store";
import {incrementCounter,decrementCounter} from './actions'
function Counter(props) {
  console.log("props", props);
  //   let [state, dispatch] = useContext(StoreContext);
  return (
    <div>
      Counter: {props.counter} <br />
      <button onClick={e => props.incrementCounter()}>+</button>
      <button onClick={e => props.decrementCounter()}>-</button>
    </div>
  );
}
function mapStateToProps(state, props) {
  return {
    counter: state
  };
}
export default connect(mapStateToProps, {incrementCounter,decrementCounter})(Counter);

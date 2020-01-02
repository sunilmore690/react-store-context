import React from "react";

import { StoreProvider } from "./context-store";

import Counter from "./Counter";
import './App.css'
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  let counter = 0;
  return (
    <div className='App'>
      <StoreProvider reducer={counterReducer} initialState={counter}>
        <Counter myprops='1'/>
      </StoreProvider>
    </div>
  );
}

export default App;

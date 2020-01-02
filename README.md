
# react-global-context-store

Manage global state for your React app using Context api

  

Required React Version: > **16.9**

  

**Install react-global-context-store **

```
// Using yarn
$ yarn i react-global-context-store --save

// Using npm
$ npm install react-global-context-store --save

```

Initialize Store Context

*App.js*

```

import React from 'react'

import { StoreProvider } from "react-global-context-store";

import Counter from './Counter'

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
		<StoreProvider reducer={counterReducer} initialState={counter}>
			<Counter />
	   </StoreProvider>
	);

}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

  

### Access & Modify Global State**

  
  

**Class component**

*Counter.js*

```
import  React,  { useContext  }  from  "react";
import  StoreContext  from  "react-global-context-store";

function  Counter()  {
	let  [state, dispatch] =  useContext(StoreContext);
	return  (
		<div>
			Counter: {state} <br  />
			<button  onClick={e =>  dispatch({ type:  "INCREMENT" })}></button>
			<button  onClick={e =>  dispatch({ type:  "DECREMENT" })}>-</button>
		</div>
	);

}
export  default  Counter;
 
```
#### connect
react-global-store-context provides a connect function for you to connect your component to the store.

Normally, you’ll call connect in this way:

```
import { connect } from 'react-global-context-store'
import { increment, decrement } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


```

#### async actions

you can define async actions

```
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```
[![Edit react-context-api](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-context-api-cvndq?fontsize=14&hidenavigation=1&theme=dark)

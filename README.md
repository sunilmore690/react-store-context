
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
	let  [state, dispatch] =  useContext(MyContext);
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

[![Edit react-context-api](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-context-api-cvndq?fontsize=14&hidenavigation=1&theme=dark)
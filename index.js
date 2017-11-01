import React from 'react';
import ReactDOM from 'react-dom';
import App,{color, number} from './components/App';
//rendering jsx onto DOM
ReactDOM.render(<App/>,document.getElementById("root"));
console.log(color,number);
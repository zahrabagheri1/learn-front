import React from 'react';
import ReactDOM from 'react-dom';
import Event from './component/Event'
import App from './component/App';
import Car from './component/Car';
import Form from './component/Form';

// let str = "Do you?!"
//* With JSX you can write expressions inside curly braces { }.
// let myElement0 = <h1>I Love JSX! {str}</h1>

//* To write HTML on multiple lines, put the HTML inside parentheses ()
// const myElement1 = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

//* The HTML code must be wrapped in ONE top level element.
// const myElement2 = (
//   <div>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );

// <React.Fragment> </React.Fragment>
// const myElement3 = (
//   <React.Fragment>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </React.Fragment>
// );

// ? App component
// ReactDOM.render( <App name="ali"  color= "blue"/>, 
//  document.getElementById('root')

// );

// ? event component
// ReactDOM.render( <Event name="ali"  favritecolor= "blue"/>, 
//  document.getElementById('root')

// );

//? form component
ReactDOM.render( <Form/>, 
 document.getElementById('root')

);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();







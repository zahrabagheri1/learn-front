import React from "react";

//? React Components
//! When creating a React component, the component's name MUST start with an upper case letter.
//* Class Component
//* A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
//* The component also requires a render() method, this method returns HTML.

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Wellcome to my website</h1>
//         <p>Class Component</p>
//       </React.Fragment>
//     );
//   }
// }
// 



//*Function Component
//*Here is the same example as above, but created using a Function component instead.
//* A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
//*

// function App(){
//     return(
//         <React.Fragment>
//             <h1>Wellcome to my website</h1>
//             <p>Function Component</p>
//         </React.Fragment>  
//     );
// }




// Todo: Constructor
//* The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.
//* The concept of a constructor is the same in React. The constructor in a React component is called before the component is mounted.
//* Constructor(props){  
//*     super(props);  
//* }  
// صفحه زمانی اپدیت میشه یا مجدد رندر می شود که استیت تغییر کند

// class App extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         color: "red",
    //         name: "zahra",
    //     }
    // }


//     constructor(props){
//         super(props)
//         this.state = {
//             color: "red",
//             name: props.name,
//         }
//     }

//   render() {
//     // console.log(this.props.name);
//     return (
//       <React.Fragment>
//         <h1>Wellcome to my website</h1>
//         <p>my name is {this.state.name} and my fav color is {this.state.color}</p>
//       </React.Fragment>
//     );
//   }
// }


// * Props
 import Car from "./Car";
function App(props){
    return(
      <React.Fragment>
        <h1>Wellcome to my website</h1>
        <p>my name is {props.name} and my fav color is {props.color}</p>
        <Car/>
      </React.Fragment>        
    )
}








export default App;


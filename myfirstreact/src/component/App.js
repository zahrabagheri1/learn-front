import React from "react";
import Car from "./Car";

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
//* props stands for properties.
//* Props are arguments passed into React components.
//* Props are passed to components via HTML attributes.

// function App(props){
//     return(
//       <React.Fragment>
//         <h1>Wellcome to my website</h1>
//         <p>my name is {props.name} and my fav color is {props.color}</p>
//         <Car/>
//       </React.Fragment>
//     )
// }

// class App extends React.Component {
//   render() {
//     const carditail = {
//       color: "yellow",
//       model: "mostang",
//       year: "2014",
//     };
//     return (
//       <React.Fragment>
//         <h1>Wellcome to my website</h1>
//         <p>
//           my name is {this.props.name} and my fav color is {this.props.color}
//         </p>
//         <Car carditail={carditail} />
//       </React.Fragment>
//     );
//   }
// }

// * state
//* he state is a built-in React object that is used to contain data or information about the component.
//* A component's state can change over time; whenever it changes, the component re-renders.

// class App extends  React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       brand : "Ford",
//       model : "Mustang",
//       color : "Black",
//       year : 2015
//     };
//   }
//   render(){
//     return(
//       <div>
//         <h1>My Car {this.state.brand}</h1>
//       </div>
//     )
//     }
// }

// Todo: Life cycle : each component in react has lifecycle 
// Todo: Mouting puttting element in to the DOM
// TOdo: The render() method is required and will always be called, the others are optional and will be called if you define them

// class App extends React.Component {
// * constructor()  دقیقا بعد از این که که کلاس اجرا شد اجرا میشود
// a method used to initialize an object's state in a class.
// It automatically called during the creation of an object in a class
// Constructor(props){ 
//    super(props);    //this will initiate the parent's constructor
//   this.stet ={    };
// }

// constructor(props) {
//   super(props);
//   this.state = {favoritecolor: "red"};
// }

//*  getDerivedStateFromProps() قبل از اینکه رندر اجرا بشه اجرا میشود
//

// static getDerivedStateFromProps(props, state) {
//   return {favoritecolor: props.color };
// }

//* componentDidMount()
// زمانی که کلاس اجرا شده بعد از یک ثانیه رنگ تغییر میکنه
// his is where you run statements that requires that the component is already placed in the DOM.
// componentDidMount() {
//   setTimeout(() => {
//     this.setState({favoritecolor: "yellow"})
//   }, 1000)
// }

//* render()
//required, and is the method that actually outputs the HTML to the DOM.

// render() {
//   return (
//     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//   );
// }
// }



// Todo: Updating  => when a component is updated.
// Todo:A component is updated whenever there is a change in the component's state or props.

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

//* getDerivedStateFromProps()
// چون قبل از اینکه ما روی باتن کیک کنیم این قسمت اجرا میشود پس بنابراین اپدیت شده میباشد
  // static getDerivedStateFromProps(props, state){
  //   return {favoritecolor : props.color};
  // }

//* shouldComponentUpdate()
// return a Boolean value that specifies whether React should continue with the rendering or not.
// defult value is true
// shouldComponentUpdate() {
//   return true;
// }


// این دو با هم کار میکنن یعنی همراه با گت اسنپ شات بیفور اپدیت باید کامپوننت دید اپدیت باشد
//* getSnapshotBeforeUpdate()
getSnapshotBeforeUpdate(prevProps, prevState) {
  document.getElementById("div1").innerHTML =
  "Before the update, the favorite was " + prevState.favoritecolor;
}
//* componentDidUpdate()
// called after the component is updated in the DOM.
componentDidUpdate() {
  document.getElementById("div2").innerHTML =
  "The updated favorite is " + this.state.favoritecolor;
}
//* render()  
//  اول استیت تغییر میکند و بعد رندر اجرا میشود و در اخر چون دیفالت ترو است اگر کلیک کنیم رنگ تغییر میکند
changeColor = () => {
    this.setState({favoritecolor: "yellow"});
  }

render() {
  return (
    <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      <button type="button" onClick={this.changeColor}>Change color</button>
    </div>
  );
}

}
// Todo: Unmouting 
//todo:  when a component is removed from the DOM, or unmounting as React likes to call it.
//todo:   وقتی همه چی اجرا شد این در اخر اجرا می شود. برای زمان هایی که میخوایم قبل از بسته شدن کامپوننت استیت رو یک جا ذخیره کنیم 
// زمانی اجرا می شود که کامپونننت داره از روی دام برداشته مبشود
//* componentWillUnmount()


export default App;

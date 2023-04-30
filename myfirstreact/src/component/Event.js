import React from "react";

//Just like HTML DOM events, React can perform actions based on user events.

// class Event extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {favritecolor: "red"};
//     }
//   shoot = () => {
//     this.setState({favritecolor: "blue"})
//   }

//   render() {
//     return (
//         <div>
//             <h1>My favrite Color is {this.state.favritecolor}</h1>
//             <button onClick={this.shoot}>Take the Shot!</button>
//         </div>
//     )
//   }
// }

// class Event extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favritecolor: "red" };
//   }
//   //To pass an argument to an event handler, use an arrow function.
//   shoot = (a) => {
//     this.setState({ favritecolor: a });
//     // alert(a);
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favrite Color is {this.state.favritecolor}</h1>
//         <button onClick={() => this.shoot("Goal!")}>Take the shot!</button>
//       </div>
//     );
//   }
// }

function Event() {
    const shoot = (a, b) => {
        console.log(b)
      alert(b.type);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
  
    return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
  }




export default Event;

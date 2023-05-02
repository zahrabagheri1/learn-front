import React from "react";
//* Handling forms is about how you handle the data when it changes value or gets submitted.
//* In HTML, form data is usually handled by the DOM.
//* In React, form data is usually handled by the components.
//* When the data is handled by the components, all the data is stored in the component state.
//* You can control changes by adding event handlers in the onChange attribute.
//* We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myname: "zahra",
      chk: true,
      text: "Please enter somthing!",
      select: "BMW",
    };
  }
  handleChange = (event) => {
    // this.setState({
    //     myname: event.target.value
    // })

    // this.setState({

    //     checked : event.target.checked
    // })

    //checked name and checked box
    // let name = event.target.name;
    // let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    // this.setState({
    //     [name] : value,
    // })

    //*
    let name = event.target.name;
    let value = event.target.type;
    if (value === "checkbox") {
      value = event.target.checked;
    } else if (value === "text") {
      value = event.target.value;
    } else if (value === "textarea") {
      value = event.target.value;
    } else {
      value = event.target.value;
    }

    this.setState({
      [name]: value,
    });

    //* textarea
    // this.setState({
    //     text: event.target.value,
    // })
  };

  handlesubmit = (event) => {
    event.preventDefault();
    alert("Form has been submit");
  };

  componentDidUpdate() {
    console.log(this.state.myname);
    console.log(this.state.chk);
    console.log(this.state.text);
    console.log(this.state.select);
  }

  render() {
    // let header = "";
    // if (this.state.myname != "") {
    //     header = "Wellcome!" + this.state.myname ;

    // } else {
    //     header = "Goodbye..."
    // }

    let header =
      this.state.myname !== "" ? "Wellcome." + this.state.myname : "Goodbye";

    return (
      <form onSubmit={this.handlesubmit}>
        {header}
        <h1>It's my first form in react.</h1>
        <label>Name:</label>
        <input
          type="text"
          name="myname"
          value={this.state.myname}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          name="chk"
          checked={this.state.chk}
          onChange={this.handleChange}
        />
        <textarea
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></textarea>
        <select
          name="select"
          value={this.state.select}
          onChange={this.handleChange}
        >
          <option>Perad</option>
          <option>MVM</option>
          <option>BMW</option>
          <option>Ford</option>
          <option>Mostange</option>
          <option>Porsh</option>
          <option>PHP</option>
        </select>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;

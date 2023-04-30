import React from "react";

class Car extends React.Component{
    render(){
        return(
            <h1>GoodBye {this.props.carditail.model} car {this.props.carditail.year}.</h1>
        )
    }
}

export default Car;
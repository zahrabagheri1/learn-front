import React, { Component } from "react";

class UserOne extends Component{

    constructor(){
        super()
    }
    handleClick = ()=>{
        // this.props.history.push('./users')
    }
    render(){
        // console.log(this.props.match)
        return(
            <>
                <h1>user one</h1>
                <button onClick={this.handleClick}>Go</button>
            </>
        )
    }
}

export default UserOne;
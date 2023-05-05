import React from "react";
import { TempTryConvert } from "./TempTryConvert";

const scales ={
    c: "celsius",
    f: "fahrenheit",
    k: "kelvin", 
}

    // celsius to fahrenheit
    // celsius to kelvin
class Temperature extends React.Component{
    constructor(){
        super();

    }

    handleChangeTemp = (event)=>{
        this.props.handleChangeTemp(event.targrt.value);
    }

    render(){
        return(
            <div className="tempform">
                <div className="tempdiv">
                    <label className="templabel" >{scales[this.props.type]}</label>
                    <input type="text" value={this.props.temperature} className="tempinput" onChange={this.handleChangeTemp}/>
                </div>
            </div>
        )
    }
}

export default Temperature;
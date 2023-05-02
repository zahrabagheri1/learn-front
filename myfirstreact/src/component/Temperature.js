import React from "react";

class Temperature extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="tempform">
                <div className="tempdiv">
                    <label className="templabel" >Celsius</label>
                    <input type="text"  className="tempinput"/>
                </div>
            </div>
        )
    }
}

export default Temperature;
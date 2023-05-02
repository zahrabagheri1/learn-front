import React from 'react';
import Temperature from './Temperature';

class TempApp extends React.Component{
    constructor(props){
        super(props);
        this.state({
            value : 
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className='temptempelet'>
                    <h1 className="temptitle">Temperature</h1>
                    <Temperature type="c"/>
                    <Temperature type="f"/>
                    <Temperature type="k"/>
                </div>
            </React.Fragment>

        )
    }
}

export default TempApp;


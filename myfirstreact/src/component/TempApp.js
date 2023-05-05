import React from 'react';
import Temperature from './Temperature';
import { TempTryConvert } from './TempTryConvert';
import * as myfunc from './TempTryConvert';
class TempApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale : 'c',
            temp : ''
        };
    }

  
     // celsius to fahrenheit
    // celsius to kelvin
    
    handleChangeCelsius = (temp)=>{
        this.setState({
            scale : 'c',
            temp : temp
        })
    }

    handleChangeFahrenheit = (temp)=>{
        this.setState({
            scale : 'f',
            temp : temp
        })
    }

    handleChangeKelvin = (temp)=>{
        this.setState({
            scale : 'k',
            temp : temp
        })
    }

    render(){
        // const celsius = this.state.scale == 'c' ? myfunc.TempTryConvert(this.state.temp.myfunc.toCelsius) : this.state.temp ;
        // const fahrenheit = this.state.scale == 'f' ? myfunc.TempTryConvert(this.state.temp.myfunc.toFahrenheit) : this.state.temp ;
        // const kelvin = this.state.scale === 'k' ?
        return(
            <React.Fragment>
                <div className='temptempelet'>
                    <h1 className="temptitle">Temperature</h1>
                    <Temperature  type="c" handelchange = {this.handleChangeCelsius}/>
                    <Temperature  type="f" handelchange = {this.handleChangeFahrenheit}/>
                    <Temperature type="k" handelchange = {this.handleChangeKelvin}/>
                </div>
            </React.Fragment>

        )
    }
}

export default TempApp;


import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit){
    return (fahrenheit - 32)*5/9;
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32
}

function tryConvert(temperature,convert){
    const input  = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);

    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

class Calculator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {temperature:'',scale:'c'};
    }

    handleValueChange = (scale,temperature)=>{
        this.setState({temperature,scale})
    }


    render(){
        const c = this.state.scale === 'f'?tryConvert(this.state.temperature,toCelsius):this.state.temperature;
        const f = this.state.scale === 'c'?tryConvert(this.state.temperature,toFahrenheit):this.state.temperature;

        return <div>
        <TemperatureInput scale ='c' temperature ={c} handleChange = {this.handleValueChange}/>
        <TemperatureInput scale = 'f' temperature = {f} handleChange = {this.handleValueChange}/>
        <BoilingVerdict celsius = {parseFloat(c)}/>
    </div>
    }

}
export default Calculator
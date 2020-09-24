import React from 'react'

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        console.log(props);
    }

    handleChange(e){
        this.props.handleChange(this.props.scale,e.target.value)
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
               onChange={this.handleChange} />
        </fieldset>
    }
}

export default TemperatureInput
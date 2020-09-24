import React from 'react'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default class BtnEvent extends React.Component {
    constructor() {
        super()
        this.state = { msg: '类型' }
    }

    render() {
        return <div>
            {this.state.msg}
            <hr />
            <button className="btn btn-default" onClick={this.myClickHandler}>案件</button>
            <hr />
            <button className="btn btn-info" onClick={() => this.show('设备')}>点击调用</button>
            <hr />
            <button className="btn btn-info" onClick={() => this.changeState('设备')}>改变State</button>
            <hr />

            <input type="text" name="" id="input" className="form-control" value={this.state.msg}
                required="required" pattern="" title="" onChange={(e) => this.changeValue(e)} ref="txt" />

        </div>
    }

    myClickHandler() {
        console.log("myClickHandler")
    }

    show = (arg) => {
        console.log(arg + ' hh')
    }

    changeState = (arg) => {
        this.setState({ msg: arg }, () => {
            console.log(this);
        })
    }

    changeValue = (e) =>{
        console.log(e.target.value)
        this.setState({
            // msg: e.target.value
            msg:this.refs.txt.value
        })    
    }
        

}

//#region 

//#endregion

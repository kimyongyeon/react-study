import React, { Component } from 'react'

export default class SimpleForm extends Component {
    constructor(props) {
        super(props)
        // 상태를 초기화 합니다. 
        this.state = {value: ''}

    }

    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})

    }

    doSubmit (e) {
        window.alert("전송 :" + this.state.value)
        e.preventDefault()
    }

    render() {
        // 이벤트를 메서드에 바인딩 합니다. 
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)

        return (
            <div>
                <form onSubmit={doSubmit}>
                    <input type='text' value={this.state.value} onChange={doChange}/>
                    <input type='submit' value='전송'/>
                </form>        
            </div>
        )
    }
}

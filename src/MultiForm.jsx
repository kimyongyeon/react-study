import React, { Component } from 'react'

export default class MultiForm extends Component {
    
    constructor(props) {
        super(props)
        // 입력 양식의 초깃값을 설정 합니다.
        this.state = {
            name: '윤인성',
            age: 252222,
            hobby: '독서'
        }
    }

    // 값이 변경됐을때
    doChange(e) {
        const userValue = e.target.value
        const key = e.target.name
        this.setState({[key]: userValue})
    }

    // 전송 버튼을 눌렀을 때
    doSubmit(e) {
        e.preventDefault()
        const j = JSON.stringify(this.state)
        window.alert(j)
        
    }
    render() {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit={doSubmit}>
                <div>
                    <label>
                        이름: <br />
                        <input type='text' name="name" value={this.state.name} onChange={doChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        나이: <br />
                        <input type='number' name="age" value={this.state.age} onChange={doChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        취미: <br />
                        <input type='text' name="hobby" value={this.state.hobby} onChange={doChange}/>
                    </label>
                </div>
                <input type='submit' value='전송'/>
            </form>
        )
    }
}

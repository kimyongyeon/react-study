import React from "react";

export default class CBox extends React.Component {

    // 생성자 
    constructor(props) {
        super(props) ;
        // 상태값을 초기화 합니다. 
        this.state = {checked:false}
    }
    render() {
        // 체크 되지 않았을 때의 상태 
        let mark = ''
        let bstyle = {fontWeight: 'normal'}
        // 체크돼 있는지 확인 
        if (this.state.checked) {
            mark = 'V'
            bstyle = {fontWeight: 'bold'}
        }
        const clickHandler = (e) => {
            const newValue = !this.state.checked
            this.setState({checked: newValue})
        }
        // 랜더링할 내용을 반환합니다. 
        return (
            <div onClick={clickHandler} style={bstyle}>{mark} {this.props.label}</div>
        )
    }
}
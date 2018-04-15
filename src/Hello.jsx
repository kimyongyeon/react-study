import React from "react";

export default class Hello extends React.Component {
    constructor(props) {
        super(props) ;
        // 이벤트 핸들러에 this를 설정합니다. 
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        const name = this.props.name;
        alert(`${name}님 안녕하세요.`);
    }
    render() {
        return (
            <div onClick={this.clickHandler}>click me</div>
        )
    }
}
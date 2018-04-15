import React from "react";

export default class RList extends React.Component {
    render() {
        // items 속성에 지정한 items 배열을 사용합니다. 
        const items = this.props.items.split(",");
        // 아이템 목록을 기반으로 li요소를 생성합니다. 
        const itemObj = items.map(
            (e) => {
                return <li key={e}>{e}</li>
            }
        )
        // 타이틀
        let title = this.props.title;
        if (!title) title = "LIST";
        // 랜더링할 내용을 반환 합니다. 
        return (
            <div>
                <h3>{title}</h3>
                <ul>{itemObj}</ul>
            </div>
        )
    }
}


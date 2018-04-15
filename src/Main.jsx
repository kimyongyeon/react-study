import React from "react";
import styles from "./styles.scss";

function btnLogin() {
    alert("login success");
}

function Greeting(props) {
    return <h1>{props.type}</h1>
}

const dom = <div>
    <Greeting type="Good morning!" />
    <Greeting type="hello" />
    <Greeting type="Good afternoon!" />
</div>

const clickHandler = (e) => {
    alert('로그인 입니다. ');
}

export default () => (
    <div className={styles.title}>
        {dom}
        <h1>Main Header</h1>
        <form action=''>
            <input type='text' placeholder="userId"/>
            <input type='text' placeholder="password"/>
            <button onClick={clickHandler}>로그인</button>
        </form>
    </div>
)
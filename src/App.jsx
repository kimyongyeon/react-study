import React, { Component, Fragment } from 'react'
import styles from "./styles.scss";
import Main from "./Main";
import RList from "./RList";
import Hello from "./Hello";
import CBox from "./CBox";
import NumberForm from "./NumberForm"
import SimpleForm from "./SimpleForm"
// import React16 from "./React16"
import MultiForm from "./MultiForm"

const st = {textAlign: 'cetner'}
//console.log(RList);!!

const cBoxDom = <div>
    <CBox label="Apple" />
    <CBox label="Banana" />
    <CBox label="Orange" />
    <CBox label="Mango" />
</div>

export default () => (
    <Fragment>
        <MultiForm />
        {/* <React16  /> */}
        <div style={st}>
            숫자만: <NumberForm />
            심플: <SimpleForm />
        </div>
        <div className={styles.title}>
            <Main />
            <h1>Hello!</h1>
            <p> lorem ipsum</p>
        </div>
        <RList title="Colors" items="Red,Green,Blue,White" />
        <Hello name="김태희"/>
        {cBoxDom}
    </Fragment>
)

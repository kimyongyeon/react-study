import React, { Component, Fragment } from 'react'
import { createPortal } from "react-dom"

// const BoundaryHOC = ProtectedComponent => class BoundaryHOC extends component {
//     state = {
//         hasError: false
//     }
//     componentDidCatch = () => {
//         this.setState({
//             hasError: true
//         })
//     }
//     render() {
//         const { friends } = this.state;
//         if (hasError) {
//             return <ErrorFallback />
//         } else {
//             return <ProtectedComponent />
//         }
//     }
// }

// class ErrorMaker extends Component {
//     state = {
//         friends: ["jisu", "flynn", "daal", "kneeprayer"]
//     }
//     componentDidMount = () => {
//         setTimeout(() => {
//             this.setState({
//                friends: undefined 
//             }, 2000)
//         })
//     }
//     render() {
//         const { friends } = this.state;
//         return friends.map(friend => `${friend}`)
//     }
// }

class Portals extends Component {
    render() {
        return createPortal(
            <Message />,
            document.getElementById("touchme")
        )
    }
}

const Message = () => "Just touched it!"

class ReturnType extends Component {
    render() {
        return "hello"
    }
}

const ErrorFallback = () => "Sorry something went wrong"

export default class React16 extends Component {
    // state = {
    //     hasError: false
    // }
    // componentDidCatch = (error, info) => {
    //     console.log(`catched ${error} the info ${JSON.stringify(info)}`)
    // }
    render() {
        const { hasError} = this.state
        return (
            <Fragment>
                <ReturnType />
                <Portals />
                <ErrorMaker />
            </Fragment>
        )
    }
}

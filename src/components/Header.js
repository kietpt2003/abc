import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'testEmail',
            name: ''
        }
    }

    handleInput = (event) => {
        let inputEmail = event.target.value;
        console.log(inputEmail)
        this.setState({
            email: inputEmail
        })
    }

    render() {
        return (
            <div>
                <h1>hello {this.props.sayHello}</h1>
                <p>check state {this.state.email}</p>
                Email:<input value={this.state.email} onChange={(event) => { this.handleInput(event) }} />
            </div>
        )
    }
}

import React, { Component } from 'react'

class Result extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    componentDidMount() {
        this.props.result()
    }
    static getDerivedStateFromProps(props) {
        console.log(props.wrongAns)
        console.log(props.writeAns)
        return{
            write: props.wrongAns,
            wrong: props.writeAns
        }
    }
    render() {
        return (
            <div>
                <h1>Result</h1>
                <p>Write Answers: {this.state.write}</p>
                <p>Wrong Answers: {this.state.wrong}</p>
            </div>
        )
    }
}

export default Result
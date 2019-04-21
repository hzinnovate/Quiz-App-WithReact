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
        // console.log(props.wrongAns)
        // console.log(props.writeAns)
        return{
            Right: props.RightAns,
            wrong: props.wrongAns,
            time: props.time
        }
    }
    totalTime(){
        var date = new Date(this.state.time);
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        // var hours = date.hours();
        return(
            <p> Total Time: {minutes + ' : ' + seconds}</p>
        )
    }
    render() {
        const {Right, wrong} = this.state
        return (
            <div>
                <h1>Result</h1>
            <p>{Right > wrong ? 'conratulation you hav passed' : 'Sorry your are Fail'}</p>
                <p>Total Questions: {Right + wrong}</p>
                <p>Right Answers: {Right}</p>
                <p>Wrong Answers: {wrong}</p>
                {this.totalTime()}
                <button onClick={()=>{window.location.reload()}}>Try Again</button>
            </div>
        )
    }
}

export default Result
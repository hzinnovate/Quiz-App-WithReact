import React , {Component} from 'react';

class Timer extends Component{
    constructor(){
        super();
        this.state = {
            totalTime: 0,
            time: 0,
            timer: '',
        }
    }
componentDidMount(){
const {time, totalTime} = this.state
var newTime = 0;
    this.state.timer = setInterval(() => {
    var get = new Date(newTime)
    var minute = get.getMinutes()
    var seconds = get.getSeconds()
    newTime = parseInt(newTime) + 1000
    // console.log(newTime)
    this.setState({
        totalTime: minute + ':' + seconds,
        time: newTime
    })
}, 1000)

}
componentWillUnmount(){
    clearInterval(this.state.timer)
    this.props.time(this.state.time)
}


    render(){
        const {totalTime, time} = this.state
        // console.log(time)
        return(
            <div>
                <p>Time Count : {totalTime}</p>
            </div>
        )
    }
}

export default Timer
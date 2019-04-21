import React , {Component} from 'react';

class Timer extends Component{
    constructor(){
        super();
        this.state = {
            totalTime: 0,
            time: 0,
        }
    }

time(){
    const {time, totalTime} = this.state
  var counter = setInterval(() => {
      var newTime = time + 1000
        var get = new Date(newTime)
            this.setState({
                totalTime: get,
                time: newTime
            })
    }, 1000)
    return(
        <h1>{totalTime.getMinutes}</h1>
    )
}

    render(){
        const {totalTime} = this.state
        return(
            <div>
                {this.time}
            </div>
        )
    }
}

export default Timer
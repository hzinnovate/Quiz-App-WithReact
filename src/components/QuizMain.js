import React, {Component} from 'react'
import { nextTick } from 'q';

class Quiz extends Component{
    constructor(){
        super();
        this.state = {
            ans: 0,
            time: 1000
        }
    }
    static getDerivedStateFromProps(props){

        return{
            quiz : props.sendQuiz
        }
    }
    next(){
        this.props.counter(this.state.ans)
    }

    render(){
        const {quiz, ans} = this.state
        return(
            <div>
            <h1>Quiz</h1>
                <h2>Question :  {quiz.question}</h2>
                <li>{quiz.correct_answer}<input type='radio' name='option' value='1' onClick={(e)=>this.setState({ans: e.target.value})} /></li>
                {quiz.incorrect_answers.map((e,i)=>{
                    return(<li key={i}>{e}<input type='radio' name='option' value='0' onClick={(e)=>this.setState({ans: e.target.value})} /></li>)
                })}
                <button onClick={()=>this.next()} >Next</button>
            </div>
        )
    }
}

export default Quiz
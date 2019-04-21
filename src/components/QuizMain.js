import React, {Component} from 'react'
import { nextTick } from 'q';

class Quiz extends Component{
    constructor(){
        super();
        this.state = {
            ans: 0,
            time: 1000,
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
        const {quiz, ans, checked} = this.state
        return(
            <div style={{width: '80%'}}>
            <h1>Quiz</h1>
            <div style={{textAlign: 'left'}}>

                <h2>Question :  {quiz.question}</h2>
                <ol>

                <li><input type='radio' name='option' value='1' defaultChecked={false} onClick={(e)=>this.setState({ans: e.target.value})} /> &nbsp; &nbsp; &nbsp; {quiz.correct_answer}</li>
                {quiz.incorrect_answers.map((e,i)=>{
                    return(<li key={i}><input type='radio' name='option' value='0' defaultChecked={false} onClick={(e)=>this.setState({ans: e.target.value})}  /> &nbsp; &nbsp; &nbsp; {e}</li>)
                })}
                </ol>
                <button style={{marginLeft: '100px', width: '100px'}} onClick={()=>this.next()} >Next</button>
                </div>
            </div>
        )
    }
}

export default Quiz
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Quiz from './components/QuizMain'
import Result from './components/result'
import Timer from './components/timer'
class App extends Component {
  constructor(){
    super()
    this.state = {
      login: true,
      quiz: [],
      countBtn: 0,
      trueCounter: 0,
    }
    this.loginFunc = this.loginFunc.bind(this)
    this.counter = this.counter.bind(this)
    this.result = this.result.bind(this)
    // this.quizsender = this.quizsender.bind(this)
  }

  componentWillMount(){
    fetch('https://opentdb.com/api.php?amount=10')
          .then((res) =>
            res.json()
          )
          .then((resp) =>
          this.setState({
              quiz: resp.results 
          })
          )
        }
  loginFunc(){
    this.setState({
      login: true      
    })
  }
  counter(e){
    if(this.state.countBtn < this.state.quiz.length ){
      this.setState({
        countBtn: this.state.countBtn + 1,
        trueCounter: this.state.trueCounter + parseInt(e)
      })
    }
  }
  result(){
    const {trueCounter, quiz} = this.state
    this.setState({
      wrongAns : quiz.length - trueCounter,
      writeAns : trueCounter,
    })
  }
  render() {
    const {login, quiz,countBtn,trueCounter,  sendQuiz, writeAns, wrongAns} = this.state
    // console.log(wrongAns)
    // console.log(writeAns)
    return (
      <div className="App">
        <header className="App-header">
            {!login && <Login login={this.loginFunc} />}
            {login && quiz.length && countBtn < 10 &&  <Quiz counter={this.counter} sendQuiz={quiz[countBtn]} mount={this.quizsender} />}
            {login && countBtn === 10 && <Result wrongAns={wrongAns} writeAns={writeAns} result={this.result}/>}
            {/* <Timer /> */}
        </header>
      </div>
    );
  }
}
export default App;
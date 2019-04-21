import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: 'abc@xyz.com',
            password: '123456789'
        }
    }
email(e){
    this.setState({
        emailInput: e.target.value
    })
}
password(e){
    this.setState({
        passwordInput: e.target.value
    })
}
loginbtn(){
    const {email , password , emailInput , passwordInput} = this.state
    if(email === emailInput && password === passwordInput){
            this.props.login()
    }else{
        console.log('error')
    }
}

    render(){
        return(
            <div>
                <h2>Login</h2>
                <input onChange={(e)=>this.email(e)} type='email' placeholder='email' />
                <br/>
                <input onChange={(e)=>this.password(e)} type='password' placeholder='password' />
                <br />
                <button onClick={()=>this.loginbtn()}>Login</button>
            </div>
        )
    }
}

export default Login
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './home';
// import { Redirect, useHistory} from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', login: false, store: null };
      }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = (e) => {
        fetch ('http://127.0.0.1:8000/api-token-auth/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then((response) => {
            response.json().then((result) => {
                console.warn('result', result);
                localStorage.setItem('login', true)
                localStorage.setItem('token', result.token)
                this.setState({login: true})
            })
        })
        
    }
    render() {
        return (
            <div>
                {
                    !this.state.login?
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" onChange={this.handleChange}/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                        <button onClick={() =>{this.handleClick()}}>Submit</button>
                    </div>
                    :
                    <Home/>
                }
            </div>
        )
    }
}

export default Login;
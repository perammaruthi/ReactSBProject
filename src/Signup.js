import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';

class Register extends Component {
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/target' />
        }
      }
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', password: '' };
      }
    handleChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = (e) => {
        fetch ('http://127.0.0.1:8000/api/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
        }
        ).then((response)=> {
          console.log(response)
          this.props.history.push('/home')
        }).catch(error => {
          alert('Login Failed. Try Again')
        });
        e.preventDefault();

    }
    render() {
        return (
            <div>
                  <label htmlFor="firstName">FirstName:</label>
                  <input type="text" id="first_name" onChange={this.handleChange}/>
                  <label htmlFor="lastName">LastName:</label>
                  <input type="text" id="last_name" onChange={this.handleChange}/>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" onChange={this.handleChange}/>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" onChange={this.handleChange}/>
                  <button onClick={() =>{this.handleClick()}}>SigUp</button>
            </div>
        )
    }
}

export default Register;
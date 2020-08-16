import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AuthApiService from './AuthApiService'
import TokenService from './TokenService'



export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: ''
      },
      password: {
        value: ''
      },
      LogInUserID: 0,
      error: null,
    };
  }

  handleLoginSuccess = () => {
    window.location = '/user/dash'
  }

  changeUsername(username) {
    this.setState({ userName: { value: username } });
  }

  changePassword(password) {
    this.setState({ password: { value: password } });
  }

  componentDidMount() {
    console.log('Stateful component LogIn successfully mounted.');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target
    console.log('username:', username.value, "password:", password.value);
    AuthApiService.postLogin({
      userName: username.value,
      password: password.value,
    })

      .then(response => {
        console.log("response ID", response)
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(response.authToken)
        TokenService.saveUserId(response.userId)
        window.location = '/user/dash'
      })
      .then(response => {
        console.log("response:", response)
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    const { error } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="wrapper">
            <label htmlFor="username"> Username </label>
            <input type="text" className="username" name="username" required />
          </div>
          <div className="wrapper">
            <label htmlFor="password"> Password </label>
            <input type="text" className="password" name="password" required />
          </div>
          <div className="wrapper">
            <button type="submit"> Login </button>
            <Link to="/registration"><button type="button"> Register </button></Link>
          </div>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
        </form>
      </div>
    )
  }



}
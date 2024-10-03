import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import TokenService from '../services/TokenService';
import '../styles/Login.css';

const LoginForm = ({ onLoginSuccess = () => {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log('Stateful component LogIn successfully mounted.');
  }, []);

  const handleLoginSuccess = () => {
    window.location = '/myboards';
  };

  const handleSubmitJwtAuth = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });
      console.log("response ID", response.data);
      setUsername('');
      setPassword('');
      TokenService.saveAuthToken(response.data.authToken);
      TokenService.saveUserId(response.data.user_id);
      history.push('/myBoards');
    } catch (err) {
      alert(err);
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmitJwtAuth}>
        
          <input
            type="text"
            className="formInput"
            name="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
       
     
          <input
            type="password"
            className="formInput"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
       
        <div className="button-spacer">
          <button className="formButton" type="submit"> Login </button>
        </div>
        <div className="button-spacer">
          <Link to="/registration">
            <button className="formButton" type="button"> Register </button>
          </Link>
        </div>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
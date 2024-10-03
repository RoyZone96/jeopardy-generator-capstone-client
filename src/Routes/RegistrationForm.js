import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Registration.css";
import TokenService from "../services/TokenService";

const RegistrationForm = () => {
  const [username, setUsername] = useState({ value: "", touched: false });
  const [password, setPassword] = useState({ value: "", touched: false });
  const [repeatPassword, setRepeatPassword] = useState({
    value: "",
    touched: false,
  });
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    console.log("Stateful component Sign Up successfully mounted.");
  }, []);

  const handleShow = () => {
    setIsActive(false);
  };

  const handleChangeUsername = (e) => {
    setUsername({ value: e.target.value, touched: true });
  };

  const handleChangePassword = (e) => {
    setPassword({ value: e.target.value, touched: true });
  };

  const handleChangeRepeatPassword = (e) => {
    setRepeatPassword({ value: e.target.value, touched: true });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginSuccess = (user) => {
    window.location = "/user/dash";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = event.target;
    console.log(
      "username:",
      username.value,
      "password:",
      password.value,
      "email",
      email.value
    );
    setError(null);

    axios
      .post("/api/auth/register", {
        username: username.value,
        password: password.value,
        email: email.value,
      })
      .then((response) => {
        console.log("user:", response.data);
        username.value = "";
        password.value = "";
        confirmPassword.value = "";
        email.value = "";
        TokenService.saveAuthToken(response.data.authToken);
        TokenService.saveUserId(response.data.id);
        window.location = "/login";
      })
      .catch((err) => {
        setError(err.response.data.error);
        alert(err.response.data.error);
      });
  };

  const validateUsername = () => {
    const trimmedUsername = username.value.trim();
    if (trimmedUsername.length === 0) {
      return <p className="input-error">Username is required</p>;
    } else if (trimmedUsername.length < 2) {
      return (
        <p className="input-error">
          Username must be at least 2 characters long
        </p>
      );
    }
  };

  const validatePassword = () => {
    const trimmedPassword = password.value.trim();
    if (trimmedPassword.length === 0) {
      return <p className="input-error">Password is required</p>;
    } else if (trimmedPassword.length < 6 || trimmedPassword.length > 72) {
      return (
        <p className="input-error">
          Password must be between 6 and 72 characters long
        </p>
      );
    } else if (!trimmedPassword.match(/[0-9]/)) {
      return (
        <p className="input-error">Password must contain at least one number</p>
      );
    }
  };

  const validateRepeatPassword = () => {
    const trimmedRepeatPassword = repeatPassword.value.trim();
    const trimmedPassword = password.value.trim();
    if (trimmedRepeatPassword !== trimmedPassword) {
      return <p className="input-error">Passwords do not match</p>;
    }
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="formInput"
          name="username"
          required
          onChange={handleChangeUsername}
        />
        {username.touched && validateUsername()}

        <input
          type="password"
          placeholder="Password"
          className="formInput"
          name="password"
          minLength="8"
          required
          onChange={handleChangePassword}
        />
        {password.touched && validatePassword()}

        <input
          type="password"
          placeholder="Confirm Password"
          className="formInput"
          name="confirmPassword"
          required
          onChange={handleChangeRepeatPassword}
        />
        {repeatPassword.touched && validateRepeatPassword()}

        <input
          type="text"
          placeholder="Email"
          className="formInput"
          name="email"
          required
          onChange={handleChangeEmail}
        />
        
      </form>
      <a href="/login">Already have an account? Login in here.</a>
      <button className="formButton" type="submit">
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default RegistrationForm;

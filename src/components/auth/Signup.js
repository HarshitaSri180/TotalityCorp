import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userData, setUserData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async () => {
    try {
      // Log the data being sent for debugging
      console.log("Request Data:", userData);

      // Make the signup request
      const response = await axios.post(
        "https://usercollection-8uhg.onrender.com/api/v1/user/signup",
        userData
      );

      // Log the response for debugging
      console.log("Signup Response:", response.data);

      // You may handle success, redirect, or show a success message here
    } catch (error) {
      console.error(
        "Signup Error:",
        error.response ? error.response.data : error.message
      );

      // Set the error state to display an error message
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );

      // You may handle errors, show an error message, or redirect to an error page here
    }
  };

  return (
    <div className="signupContainer">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form className="signupForm">
        <label>
          Username:
          <input
            type="text"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={signUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

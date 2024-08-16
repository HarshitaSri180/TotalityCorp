import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async () => {
    try {
      // Log the data being sent for debugging
      console.log("Request Data:", userData);

      // Make the sign-in request
      const response = await axios.post(
        "https://usercollection-8uhg.onrender.com/api/v1/user/signin",
        userData
      );

      // Log the response for debugging

      console.log("SignIn Response:", response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }

      // You may handle success, redirect, or show a success message here
    } catch (error) {
      console.error(
        "SignIn Error:",
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
    <div className="signInContainer">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <label>
          Username:
          <input
            className="inputField"
            type="text"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="inputField"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="signInButton" type="button" onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

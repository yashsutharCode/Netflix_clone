import React from "react";
import "./SignInForm.css";

const SignInForm = ({ onClose }) => (
  <div className="signin-container">
    <div className="signin-bg">
      <div className="signin-box">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <div className="signin-links">
          <a href="#" className="forgot-password">Forgot password?</a>
          <p>
            New to Netflix? <a href="App.js" className="signup-link">Sign up now.</a>
          </p>
        </div>
        <p className="recaptcha-disclaimer">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="learn-more">Learn more.</a>
        </p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default SignInForm;

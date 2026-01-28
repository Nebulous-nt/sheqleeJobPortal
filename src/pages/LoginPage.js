import React, { useState } from "react";
// import { FaEnvelope, FaKey } from "react-icons/fa"; and AiOutlineEyeInvisible for invisibleAi
// import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/loginPage.css";
import RouterHeader from "../components/RouterHeader";
import SectionWithImage from "../components/section/SectionWithImage";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const routeName = "Login";
  return (
    <>
      <RouterHeader path={routeName} />

      <div className="loginContainer">
        <div className="login">
          <div class="header">
            <img src="img/enter.svg" alt="entericon" className="headerImage" />
            <h2 className="headerText">Login to your account</h2>
          </div>

          <div className="inputGroup">
            <div className="labeledInput">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="inputContainer">
                <div className="black-con">
                  <img
                    src="img/email.svg"
                    alt="email_image"
                    className="inputImage"
                  />
                </div>
                <input
                  type="email"
                  placeholder="abebe@gmail.com"
                  className="inputField"
                />
              </div>
            </div>

            <div className="labeledInput">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="inputContainer">
                <div className="black-con">
                  <img
                    src="img/key_icon.svg"
                    alt="passwordImage"
                    className="inputImage"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="inputField passwordField"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggleButton"
                >
                  {showPassword ? (
                    <img
                      src="img/eye_slash.svg"
                      alt="passwordImage"
                      className="inputImage"
                    />
                  ) : (
                    <img
                      src="img/open_eye.svg"
                      alt="passwordImage"
                      className="inputImage"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="checkboxContainer">
            <input type="checkbox" id="rememberMe" className="customCheckbox" />
            <label htmlFor="rememberMe" className="checkboxText">
              Remember me next time.
            </label>
          </div>
          <div className="forgotPassword">
            <p>Forgot password?</p>
            <a href="/link" className="resetLink">
              Reset
            </a>
            <button className="buttonPrimary" onClick={handleLoginClick}>
              Login
            </button>
          </div>

          <div className="sectionBreak">
            <div className="sectionDivider"></div>
            <p>OR CONTINUE WITH</p>
            <div className="sectionDivider"></div>
          </div>

          <button className="socialLoginButton">
            <img
              src="img/logo_google.svg"
              alt="entericon"
              className="googleIcon"
            />
            Continue with Google
          </button>
        </div>
      </div>
      <SectionWithImage />
    </>
  );
};

export default LoginPage;

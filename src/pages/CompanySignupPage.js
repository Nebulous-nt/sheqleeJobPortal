import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/signupPage.module.css";
import RouterHeader from "../components/RouterHeader";
import SectionWithImage from "../components/section/SectionWithImage";
// import companyIcon from "/img/company.svg";
// import peopleIcon from "/public/img/user.svg";
// import emailIcon from "/public/img/email.svg";
// import eyeSlashIcon from "/public/img/eye_slash.svg";

const CompanySignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const toggleConfirmPasswordVisibility = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };
  const routeName = "Company Signup";
  return (
    <>
      <RouterHeader path={routeName} />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.companyContainer}>
            <div className={styles.companyLogo}>
              <img
                src="img/professional_registration.svg"
                alt="freelancer"
                className={styles.freelancerIcon}
              />
            </div>
            <div className={styles.companyHeader}>
              <p>
                If you are an freelancer, please visit{" "}
                <Link
                  to="/professionalsignup"
                  className={styles.freelancerLink}
                >
                  freelancers registration
                </Link>{" "}
                page.
              </p>
            </div>
          </div>

          <div class={styles.header}>
            <img
              src="img/company.png"
              alt="company_inputIcon"
              className="headerImage"
            />
            <h2 className={styles.headerText}>Company Registration</h2>
          </div>
          <div className="inputGroup">
            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Company name <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <div className={styles.black_container}>
                  <img
                    src="img/wcompany.svg"
                    alt="Company"
                    className={styles.companyIcon}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Sheqlee Co. Ltd."
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Domain <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <div className={styles.black_con}>
                  <span className={styles.domainPrefix}>https://</span>
                </div>

                <input
                  type="text"
                  placeholder="sheqlee.com"
                  className={styles.inputDomain}
                />
              </div>
            </div>
          </div>
          <div className={styles.TopSectionBreak}>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionHeader}>COMPANY REPRESENTATIVE</p>
            <div className={styles.sectionDivider}></div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Full name <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <div className={styles.black_container}>
                  <img
                    src="/img/user.svg"
                    alt="Full Name"
                    className={styles.inputIcon}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Abebe Bekila"
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <div className={styles.black_container}>
                  <img
                    src="img/email.svg"
                    alt="Email"
                    className={styles.inputIcon}
                  />
                </div>

                <input
                  type="email"
                  placeholder="abebe@gmail.com"
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Password <span className={styles.required}>*</span>
              </label>
              <div className={styles.passwordContainer}>
                <div className={styles.black_container}>
                  <img
                    src="img/signupkey_icon.svg"
                    alt="key"
                    className={styles.keyIcon}
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className={styles.inputpassword}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles.toggleButton}
                >
                  <img
                    src="img/eye_slash.svg"
                    alt="Toggle Password Visibility"
                  />
                </button>
              </div>
            </div>

            <div className={styles.labeledInput}>
              <label className={styles.label}>
                Confirm password <span className={styles.required}>*</span>
              </label>
              <div className={styles.passwordContainer}>
                <div className={styles.black_container}>
                  <img
                    src="img/signupkey_icon.svg"
                    alt="key"
                    className={styles.keyIcon}
                  />
                </div>
                <input
                  type="password"
                  placeholder="**********"
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="agreement" className={styles.checkbox} />
            <label htmlFor="agreement" className={styles.checkboxText}>
              By creating an account, you agree to our{" "}
              <a href="#" className={styles.link}>
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div className={styles.footerContainer}>
            <p className={styles.footerText}>
              Already got an account?{" "}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </p>
            <button className={styles.buttonPrimary}>Register</button>
          </div>
          <div className={styles.sectionBreak}>
            <div className={styles.sectionDivider}></div>
            <p>OR CONTINUE WITH</p>
            <div className={styles.sectionDivider}></div>
          </div>
          <button className={styles.continueWithGoogle}>
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

export default CompanySignupPage;

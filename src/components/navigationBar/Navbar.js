import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/companysignup");
  };

  return (
    <nav className={styles.navbar}>
      {/* Links Section */}
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="/assets/settingsalt2.png"
          alt="Logo"
        />
        {/* Header Text */}
        <h1 className={styles.headerText}>Sheqlee</h1>
      </header>

      {/* right navigation  */}
      <div className={styles.rightNav}>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/alljobs"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              All jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Categories
            </NavLink>
            <svg
              className={styles.navArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="11.322"
              height="7.532"
              viewBox="0 0 11.322 7.532"
            >
              <path
                id="Icon_material-keyboard-arrow-down"
                data-name="Icon material-keyboard-arrow-down"
                d="M10.164,11.76l3.79,3.781,3.79-3.781,1.164,1.164-4.954,4.954L9,12.924Z"
                transform="translate(-8.293 -11.053)"
                stroke="#000"
                stroke-width="1"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Clients
            </NavLink>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.loginButton} onClick={handleLoginClick}>
            Log in
          </button>
          <button className={styles.signupButton} onClick={handleSignupClick}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

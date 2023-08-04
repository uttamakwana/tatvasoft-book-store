import React, { useEffect, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        setPassword("");
        setConfirmPassword("");
        return alert("Password must be same");
      }
      const data = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        {
          firstName,
          lastName,
          username,
          password,
        }
      );
      console.log(data);
      if (data) {
        toast.success(data.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      className="register"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="register__background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop offset="0%" style={{ stopColor: "var(--color-primary)" }} />
              <stop
                offset="50%"
                style={{ stopColor: "var(--color-secondary)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-primary)" }}
              />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacty=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <main className="register__container">
        <form className="register__container__form" onSubmit={handleRegister}>
          <div className="register__container__form__form-group">
            <h1>📝Register</h1>
          </div>
          <div className="register__container__form__form-group">
            <div className="even">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="even">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="register__container__form__form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              pattern="[a-zA-Z0-9]+"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="register__container__form__form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              pattern="[a-zA-Z0-9$!@#*+_]{6,15}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register__container__form__form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              pattern="[a-zA-Z0-9$!@#*+_]{6,15}"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="register__container__form__form-group">
            <button type="submit">Register</button>
          </div>
          <div className="register__container__form__form-group">
            <p>
              <Link to="/login">Already have an account?</Link>
            </p>
          </div>
        </form>
        <Toaster />
      </main>
    </motion.section>
  );
};

export default Register;

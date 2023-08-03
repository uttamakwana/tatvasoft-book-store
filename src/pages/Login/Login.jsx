import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== "uttamisadmin") {
      setPassword("");
      toast.error("Register first", { duration: 1000 });
      return setTimeout(() => {
        navigate("/register");
      }, 3000);
    }
    toast.success("Login Successfull");
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  return (
    <motion.section
      className="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="login__background">
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
      <main className="login__container">
        <form className="login__container__form" onSubmit={handleLogin}>
          <div className="login__container__form__form-group">
            <h1>📟Login</h1>
          </div>
          <div className="login__container__form__form-group">
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
          <div className="login__container__form__form-group">
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
          <div className="login__container__form__form-group">
            <button type="submit">login</button>
          </div>
          <div className="login__container__form__form-group">
            <p>
              <Link to="/register">Don't have an account?</Link>
            </p>
          </div>
        </form>
      </main>
      <Toaster />
    </motion.section>
  );
};

export default Login;

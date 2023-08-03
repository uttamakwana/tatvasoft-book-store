import React, { useContext, useEffect, useState } from "react";
import AllRoutes from "../routes/AllRoutes";
import { Context } from "../context/ContextProvider";
import "./themeprovider.css";

const ThemeProvider = () => {
  const { theme, setTheme } = useContext(Context);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--color-primary", "#FFF6E0");
      document.documentElement.style.setProperty(
        "--color-secondary",
        "#D8D9DA"
      );
      document.documentElement.style.setProperty("--color-tertiary", "#61677A");
      document.documentElement.style.setProperty(
        "--color-quaternary",
        "#272829"
      );
    } else {
      document.documentElement.style.setProperty("--color-primary", "#191919");
      document.documentElement.style.setProperty(
        "--color-secondary",
        "#C84B31"
      );
      document.documentElement.style.setProperty("--color-tertiary", "#2D4263");
      document.documentElement.style.setProperty(
        "--color-quaternary",
        "#ECDBBA"
      );
    }
  }, [theme]);
  return (
    <>
      <AllRoutes />
      <main
        className="theme-container"
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        <section className="theme">🎡</section>
      </main>
    </>
  );
};

export default ThemeProvider;

import React, { useContext, useEffect, useState } from "react";
import AllRoutes from "../routes/AllRoutes";
import { Context } from "../context/ContextProvider";
import "./themeprovider.css";

const ThemeProvider = () => {
  const { theme, setTheme } = useContext(Context);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--color-primary", "#579BB1");
      document.documentElement.style.setProperty(
        "--color-secondary",
        "#ECE8DD"
      );
      document.documentElement.style.setProperty("--color-tertiary", "#E1D7C6");
      document.documentElement.style.setProperty(
        "--color-quaternary",
        "#F8F4EA"
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

import "./styles.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <main className="main">
        <Weather defaultCity="London" />
      </main>
      <footer className="footer">
        <p>
          An{" "}
          <a href="https://github.com/samantha-lind/react-weather-app" id="git">
            open-source project
          </a>{" "}
          coded by Samantha Lind
        </p>
      </footer>
    </div>
  );
}

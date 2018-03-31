import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <header className="header">
            <img src={logo} className="pic" alt="logo" />
            <h1 className="name">Chen Qian</h1>
          </header>

          <p className="intro">
            Computer Science <br />@University of Illinois Urbana Champaign<br />
            Web development<br />
            Data mining<br />
            Machine learning<br />
          </p>
        </aside>
        <div className="content">
          <p className="experience">
            Exploratory data mining, predictive machine learning and analysis on large data sets (including developing visualizations and regression models). Early work also developed a web app that connected to social media APIs and allowed users to filter their news feeds.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

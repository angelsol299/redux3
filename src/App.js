import React, { Component } from "react";

import "./App.css";
import Posts from "./components/Posts";

class App extends Component {
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default App;

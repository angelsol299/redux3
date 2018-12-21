import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <br />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

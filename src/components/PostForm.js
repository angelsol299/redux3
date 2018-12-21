import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>posts</h1>
        <form>
          <label>
            <div>
              <label>Title: </label> <br />
              <input type="text" />
            </div>
            <div>
              <label name="title">Body: </label> <br />
              <textarea name="body" />
            </div>
            <br />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default PostForm;

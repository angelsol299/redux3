import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target
    });
  }

  render() {
    return (
      <div>
        <h1>posts</h1>
        <form>
          <label>
            <div>
              <label>Title: </label> <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <br />
            <div>
              <label name="title">Body: </label> <br />
              <textarea
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Post extends Component {
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>posts</h1>
        {postItems}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(Post);

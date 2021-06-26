import React from "react";
import Post from "./Post";

class PostsList extends React.Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };

  // getUser(id) {
  //     this.props.users.forEach()
  // }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map((posts) => (
          <Post
            title={posts.title}
            content={posts.content}
            id={posts.id}
            user={"Dante"}
            deletePost={this.props.deletePost}
            updatePost={this.props.updatePost}
          />
        ))}

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="textarea"
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="create new post" />
        </form>
      </div>
    );
  }
}

export default PostsList;

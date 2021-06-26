import React from "react";

class Post extends React.Component {

  state = {
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updatePost(this.props.id, this.state);
  };

  render() {
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h3>User: {this.props.user}</h3>
        <p> {this.props.content}</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="Update Post" />
          {" "}</form>
        <h4>comments:</h4>
        <button onClick={() => this.props.deletePost(this.props.id)}>Delete</button>
        <br></br>
      </div>
    );
  }
}

export default Post;

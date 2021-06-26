import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostsList from "./PostsList";
import Signup from "./Signup";

const POSTSURL = "http://localhost:3001/api/v1/posts";

class App extends React.Component {
  state = {
    posts: [],
    comments: [],
    users: [],
    currentUser: 1,
  };

  componentDidMount() {
    fetch(POSTSURL)
      .then((res) => res.json())
      .then((posts) => this.setState({ posts: posts }));

    fetch("http://localhost:3001/api/v1/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));

    // this.updatePost()
    console.log("Mounted");
  }

  createPost = (data) => {
    data.user_id = 1;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(POSTSURL, config)
      .then((res) => res.json())
      .then((newPost) =>
        this.setState({ posts: [...this.state.posts, newPost] })
      );
  };

  updatePost = (id, data) => {
    console.log("Hello");
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${POSTSURL}/${id}`, config)
      .then((res) => res.json())
      .then((returnedPost) => {
        this.setState({
          posts: this.state.posts.filter((post) => post.id !== id),
        });
        this.setState({ posts: [returnedPost, ...this.state.posts] });
      });
  };

  deletePost = (id) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`${POSTSURL}/${id}`, config);

    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  signIn = (data) => {
    console.log(data);
  };

  handlePostsList = () => (
    <PostsList
      posts={this.state.posts}
      users={this.state.users}
      createPost={this.createPost}
      deletePost={this.deletePost}
      updatePost={this.updatePost}
    />
  );

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/posts" component={this.handlePostsList} />
            <Route
              path="/signin"
              render={(routeProps) => (
                <Signup {...routeProps} signIn={this.props.signIn} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

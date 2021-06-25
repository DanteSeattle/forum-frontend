import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './PostsList';
import Signup from './Signup';

const POSTSURL = 'http://localhost:3001/api/v1/posts'


class App extends React.Component {



  constructor(){
    super()
    this.state = {
      posts: [],
      comments: []
    }
  }

  componentDidMount() {
    console.log("Mounted")
    fetch(POSTSURL)
    .then(res => res.json())
    .then(posts => this.setState({posts: posts}))
  }

  createPost(props) {
    console.log(JSON.stringify(props))

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(props)
    }
    fetch(POSTSURL, config)
    .then(r=> r.json())
    // .then(post => this.setState({posts: [...this.state.posts, post] }))
  }

render(){
    return(
      <div>
      <Router>
          <Switch>
            <Route path='/posts' render={(routeProps) => <PostsList {...routeProps} posts = {this.state.posts} createPost = {this.createPost}/> } />
            <Route path='/signup' render={(routeProps) => <Signup {...routeProps}/> } />
          </Switch>
      </Router>
      

      </div>
    )
  }
}
export default App;

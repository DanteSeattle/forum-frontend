import React from 'react'

class Post extends React.Component{

    render(){
      return(<div>
          <h1>Title: {this.props.title}</h1>
          <p> {this.props.content}</p>
          <br></br>
      </div>)
    }
  }
  
  export default Post;
  
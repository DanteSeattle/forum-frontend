import React from 'react'

class Signup extends React.Component{
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  };
    render(){
      return(<div>
          Signin!
          <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="signin" />
        </form>
      </div>)
    }
  }
  
  export default Signup;
  
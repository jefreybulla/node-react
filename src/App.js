import React from 'react';
import logo from './logo.svg';
import './App.css';
import HandleCookies from './handle-cookies';
// import CallApi from './call-api';

const APIGet = "https://rails-auth-2020.herokuapp.com/data"
// const APIGet = "https://s1.ngrok.io/data"

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      user : 'stranger'
    }
    this.checkUser = this.checkUser.bind(this)
  }

  componentDidMount() {
    this.checkUser()
  }

  checkUser() {
    fetch(APIGet, {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => this.setState({ user: json.user? json.user :'stranger'}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.user}!</p>
          <HandleCookies />
        </header>
      </div>
    );
  }

}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HandleCookies from './HandleCookies';

const APIGet = "http://rails.toro-labs.com/data"
// const APIGet = "https://s1.ngrok.io/data"

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      user : null,
      loading: true
    }
  }

  componentDidMount() {
    this.checkUser()
  }

  async checkUser() {
    const response = await fetch(APIGet, {
      method: 'GET',
      credentials: 'include'
    })
    const json = await response.json()

    if (json.user) {
      this.setState({ user: json.user })
    }

    this.setState({ loading: false })
    console.log('Rails response ->>>')
    console.log(json)
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
          </header>
        </div>
      )
    }

    let message = 'Please log in using the Rails app'
    let authButton = null
    if (this.state.user){
      message = `Hi ${this.state.user}!`
      // authButton = <a href='https://s1.ngrok.io/logout'>Log out</a>
      authButton = <a href='http://rails.toro-labs.com/logout'>Log out</a>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{message}</h1>
          {authButton}
          <HandleCookies />
        </header>
      </div>
    );
  }

}

export default App;
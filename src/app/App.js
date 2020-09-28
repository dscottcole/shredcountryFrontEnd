import React from 'react';
import './App.css';
import Menu from '../components/Menu'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Browse from '../components/Browse'

import { 
  BrowserRouter, 
  Route 
} from 'react-router-dom'

class App extends React.Component {

  state = {
    bikes: [],
    loggedIn: false
  }

  componentDidMount = () => {
    this.getBikes()
  }

  getBikes = () => {
    fetch('http://localhost:3000/bikes')
    .then(res => res.json())
    .then(bikes => this.assignBikes(bikes))
  }

  assignBikes = (allBikes) => {
    this.setState({ bikes: allBikes })
  }

  signUp = (newUser) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div className='world'>
        <h1>Shredcountry.com</h1>
        <BrowserRouter>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup signUp={this.signUp}/>
        </Route>
        <Route path="/browse">
          <Browse bikes={this.state.bikes}/>
        </Route>        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

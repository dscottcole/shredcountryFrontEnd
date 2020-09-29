import React from 'react';
import './App.css';
import Signup from '../components/Signup'
import Login from '../components/Login'
import Browse from '../components/Browse'
import Cart from '../components/Cart'
import Menu from '../components/Menu'

import { 
  BrowserRouter, 
  Redirect, 
  Route 
} from 'react-router-dom'

class App extends React.Component {

  state = {
    bikes: [],
    isLoggedIn: false,
    cart: [],
    cartTotal: 0,
  }

  componentDidMount = () => {
    this.getBikes()
    this.setCart()
    this.handleLogin()
  }

  getBikes = () => {
    fetch('http://localhost:3000/bikes')
    .then(res => res.json())
    .then(bikes => this.assignBikes(bikes))
  }

  assignBikes = (allBikes) => {
    this.setState({ bikes: allBikes })
  }

  setCart = () => {
    if (localStorage.cart !== undefined) {
      let currentCart = JSON.parse(window.localStorage.cart)
      let currentTotal = currentCart.map(bike => bike.price).reduce((a,b) => a + b, 0)
      this.setState({ cart: currentCart, cartTotal: currentTotal})
    } else {
      this.setState({ cart: [], cartTotal: 0})
    }
  }

  addToCart = (bikeArg) => {
    let localStorage = window.localStorage
    let cart = localStorage.cart

    if (cart !== undefined) {

      let currentCart = JSON.parse(cart)
      let newCart = [...currentCart, bikeArg]

      localStorage.setItem('cart', JSON.stringify(newCart))
      this.setCart()

    } else {
      let newCart = []
      newCart.push(bikeArg)
      localStorage.setItem('cart', JSON.stringify(newCart))
      this.setCart()
    }

  }

  removeFromCart = (bikeArg) => {
    let localStorage = window.localStorage
    let cart = localStorage.cart

    if (cart !== undefined) {
      let currentCart = JSON.parse(cart)
      let newCart = [...currentCart, bikeArg].filter(bike => bike.id !== bikeArg.id)

      localStorage.setItem('cart', JSON.stringify(newCart))
      this.setCart()
    }
  }

  handleLogin = () => {
    if (localStorage.getItem('auth_key')) {
      this.setState({isLoggedIn: true})
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  render() {
    return (
      <div className='world'>
        <h1>Shredcountry.com</h1>

        <BrowserRouter>

        <Menu isLoggedIn={this.state.isLoggedIn} cart={this.state.cart} />

        <Route exact path="/">
          <p>Home</p>
        </Route>

        <Route path="/login">
          <Login handleLogin={this.handleLogin}/>
        </Route>

        <Route path="/logout" component={() => {
          localStorage.clear()
          this.handleLogin()
          this.setCart()
          return <Redirect to="/" />
        }} />

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/browse">
          <Browse bikes={this.state.bikes} addToCart={this.addToCart} cart={this.state.cart} cartTotal={this.state.cartTotal} removeFromCart={this.removeFromCart} />
        </Route>

        <Route path="/cart">
          <Cart cart={this.state.cart} cartTotal={this.state.cartTotal} removeFromCart={this.removeFromCart}/>  
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;

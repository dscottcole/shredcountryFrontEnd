import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { 
  withRouter
 } from "react-router"

class MenuInverted extends Component {
  state = { 
    activeItem: ''
  }

  handleItemClick = (e, { name }) => {
    
    let redirString = ""
    if (name === "Home") {
      redirString = "/"
    } else if (name === "Browse") {
      redirString = "/browse"
    } else if (name === 'Sign Up') {
      redirString = "/signup"
    } else if (name === 'Log In') {
      redirString = "/login"
    } else if (name === 'Log Out') {
      redirString = "/logout"
    } else if (name === 'View Cart') {
      redirString = "/cart"
    } else if (name === 'Orders') {
      redirString = "/orders"
    }

    this.setState({ activeItem: name })
    this.props.history.push(redirString)
  }

  render() {
    const { activeItem } = this.state

    let logIn = (
      <Menu.Item
      name='Log In'
      active={activeItem === 'Log In'}
      onClick={this.handleItemClick}
      />
    )
    let logOut = (
      <Menu.Item
      name='Log Out'
      active={activeItem === 'Log Out'}
      onClick={this.handleItemClick}
      />
    )
    let signUp = (
      <Menu.Item
      name='Sign Up'
      active={activeItem === 'Sign Up'}
      onClick={this.handleItemClick}
      />
    )
    let cart = (
      <Menu.Item
      name='View Cart'
      active={activeItem === 'View Cart'}
      onClick={this.handleItemClick}
      />
    )
    let orders = (
      <Menu.Item
      name='Orders'
      active={activeItem === 'Orders'}
      onClick={this.handleItemClick}
      />
    )

    return (
      <Segment centered inverted>
        <Menu inverted pointing secondary>
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />
          <Menu.Item />

          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Browse'
            active={activeItem === 'Browse'}
            onClick={this.handleItemClick}
          />

          {this.props.cart.length !== 0 ? cart : null}
          {this.props.isLoggedIn ? orders : null}
          {!this.props.isLoggedIn ? signUp : null}
          {!this.props.isLoggedIn ? logIn : logOut}

        </Menu>
      </Segment>
    )
  }
}

export default withRouter(MenuInverted)
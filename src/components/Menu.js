import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
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
            <Menu.Item
            name='Sign Up'
            active={activeItem === 'Sign Up'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='Log In'
            active={activeItem === 'Log In'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
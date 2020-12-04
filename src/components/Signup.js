import React from 'react'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { 
  withRouter
 } from "react-router"

class FormUnstackableGroup extends React.Component{

  state = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error: []
  }

  signUp = (newUser) => {
    let fetchUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://shredcountry2.herokuapp.com'

    fetch(`${fetchUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(res => {
      if (res['message']) {
        this.setState({error: res['message'] })
      } else {
        this.setState({error: ""})
        this.props.history.push('/login')
      }
    })
  }

  handleForm = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newUser = {
      "user": {
        "username": this.state.username,
        "name": this.state.fullName,
        "email": this.state.email,
        "password": this.state.password,
        "password_confirmation": this.state.passwordConfirmation
      }
    }

    this.clearState()
    this.signUp(newUser)
  }

  clearState = () => {
    this.setState({
      username: '',
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: []
    })
}

  render(){

    let errorMessage = (
      <Message
      warning
      header='Account creation failed!'
      list={[
        ...this.state.error
      ]}
      />
    )

    return(
      <Segment inverted>
        <Form onChange={e => this.handleForm(e)} inverted warning >
          <Form.Group unstackable widths={2}>
            <Form.Input fluid label='Username' placeholder='Username' name='username' value={this.state.username}/>
          </Form.Group>
          <Form.Group unstackable widths={2}>
            <Form.Input fluid label='Full Name' placeholder='Full Name' name='fullName' value={this.state.fullName}/>
            <Form.Input fluid label='Email' placeholder='Email' name='email' value={this.state.email} />
          </Form.Group>
          <Form.Group unstackable widths={2}>
            <Form.Input type='password' fluid label='Password' placeholder='Password' name='password' value={this.state.password} />
            <Form.Input type='password' fluid label='Password Confirmation' placeholder='Password Confirmation' name='passwordConfirmation' value={this.state.passwordConfirmation}/>
          </Form.Group>
          <Button onClick={e => this.handleSubmit(e)} type='submit'>Sign Up</Button>
        </Form>

        <div class="signup-warning">
            {this.state.error.length !== 0 ? errorMessage : null}
        </div>
    </Segment>
    )
  }
}

export default withRouter(FormUnstackableGroup)
import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class FormUnstackableGroup extends React.Component{

  state ={
    username: '',
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
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
    this.props.signUp(newUser)
  }

  render(){
    return(
      <Segment inverted>
        <Form onChange={e => this.handleForm(e)} inverted>
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
    </Segment>
    )
  }
}

export default FormUnstackableGroup
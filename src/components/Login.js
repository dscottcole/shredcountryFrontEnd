import React from "react";
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { 
    withRouter
   } from "react-router"

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        error: ''
    }
    
    logIn = (user) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(token => {
            if (token['auth_key']) {
                localStorage.setItem('auth_key', token['auth_key'])
                localStorage.removeItem("loginError")
                this.props.handleLogin()
                this.props.history.push('/browse')
            } else {
                this.setState({ "error": token['message'] })
                console.log(token['message'])
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

    let user = {
            "username": this.state.username,
            "password": this.state.password
        }
    this.clearState()
    this.logIn(user)
    }

    clearState = () => {
        this.setState({ "username": "", 
        "password": "" 
        })
    }

    
    render() {

        let errorMessage = (
            <Message
            warning
            header='Login Error!'
            list={[
                this.state.error
            ]}
            />
        )

        return(
            <Segment inverted>
                <Form onChange={e => this.handleForm(e)} inverted warning>
                <Form.Group unstackable widths={2}>
                    <Form.Input fluid label='Username' placeholder='Username' name='username' value={this.state.username}/>
                    <Form.Input type='password' fluid label='Password' placeholder='Password' name='password' value={this.state.password} />
                </Form.Group>

                {this.state.error !== "" ? errorMessage : null}

                <Button onClick={e => this.handleSubmit(e)} type='submit'>Log In</Button>
                </Form>
            </Segment>
        )
    }
}

export default withRouter(Login)
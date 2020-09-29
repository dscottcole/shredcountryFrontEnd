import React from 'react'
import CartCard from './CartCard'
import { Button, Message } from 'semantic-ui-react'
import { 
    withRouter
   } from "react-router"

class Cart extends React.Component{

    state = {
        cart: [],
        error: ''
    }

    componentDidMount = () => {
        this.setCartState()
    }

    componentDidUpdate = (previousProps) => {
        if (previousProps !== this.props) {
            this.setCartState()
        }
    }

    setCartState = () => {
        this.setState({cart: this.props.cart})
    }

    checkOut = () => {

        let orderInfo = {
            'cart': this.state.cart
        }

        fetch('http://localhost:3000/orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(res => {
            if (res.id !== undefined) {
                    this.successfulOrder(res.id)
            } else {
                this.setState({ "error": res['message'] })
                console.log(res['message'])
            }
        })
    }

    successfulOrder = (orderId) => {
        this.props.clearCart()
        this.props.history.push('/orders')
    }

    render() {
        let bikes = this.state.cart

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
            <div>
                <div class="ui grid container warning">
                    <div class="row">
                        {bikes.map(bike => <CartCard 
                            key={bike.id}
                            bike={bike}
                            removeFromCart={this.props.removeFromCart}
                        />)}
                    </div>
                </div>
                <div class="ui centered grid">
                    <h2> { "Cart Total: $" + this.props.cartTotal } </h2>
                    <div class="row">
                            <Button onClick={() => this.checkOut()} positive>Check Out</Button>
                    </div>
                    {this.state.error !== "" ? errorMessage : null}
                </div>
            </div>
        )
    }
}

export default withRouter(Cart)
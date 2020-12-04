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
        console.log(process.env.NODE_ENV === "development")
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
        
        let fetchUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://shredcountry2.herokuapp.com'

        fetch(`${fetchUrl}/orders`,{
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
            header='Required:'
            list={[
                this.state.error
            ]}
            />
        )

        return(
            <div class="cart">
                <div class="ui grid container warning">
                <h2 class="cart-total"> { "Cart Total: $" + this.props.cartTotal } </h2>
                    <div class="row">

                        {bikes.map(bike => <CartCard 
                            key={bike.id}
                            bike={bike}
                            removeFromCart={this.props.removeFromCart}
                        />)}
                    </div>
                </div>
                <div class="cart-button">
                        <Button onClick={() => this.checkOut()} positive>Check Out</Button>
                        {this.state.error !== "" ? errorMessage : null}
                </div>
            </div>
        )
    }
}

export default withRouter(Cart)
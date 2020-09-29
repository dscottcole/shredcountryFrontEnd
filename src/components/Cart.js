import React from 'react'
import CartCard from './CartCard'

class Cart extends React.Component{

    state = {
        cart: []
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

    render() {
        let bikes = this.state.cart
        return(
            <div class="ui celled grid">
                <div class="row">
                    {bikes.map(bike => <CartCard 
                        key={bike.id}
                        bike={bike}
                        removeFromCart={this.props.removeFromCart}
                    />)}
                </div>
            </div>
        )
    }
}

export default Cart
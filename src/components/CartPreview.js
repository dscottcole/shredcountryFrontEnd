import React from 'react'
import CartPreviewCard from './CartPreviewCard'

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
        let cartTotal = (
            <h1> {"Cart Total: $" + this.props.cartTotal} </h1>
        )

        return(
            
            <div class="cart-preview">
                    {this.props.cartTotal > 0? cartTotal : null}
                    {bikes.map(bike => <CartPreviewCard 
                        key={bike.id}
                        bike={bike}
                        removeFromCart={this.props.removeFromCart}
                    />)}
            </div>
        )
    }
}

export default Cart
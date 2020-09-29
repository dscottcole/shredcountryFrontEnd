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
        return(
            
            <div class="ui grid">
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
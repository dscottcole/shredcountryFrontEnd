import React from 'react'
import Card from './Card'
import CartPreview from "./CartPreview";

class Browse extends React.Component{

    state = {

    }

    render() {

        let unfilteredBikes = (
            <div class="ui grid container">
            {this.props.bikes.map(bike => <Card 
                key={bike.id}
                bike={bike}
                addToCart={this.props.addToCart}
            />)}
            </div>
        )

        return(
            <div class="browse">
                {unfilteredBikes}
                <CartPreview cart={this.props.cart} cartTotal={this.props.cartTotal} removeFromCart={this.props.removeFromCart} />
            </div>
        )
    }
}

export default Browse
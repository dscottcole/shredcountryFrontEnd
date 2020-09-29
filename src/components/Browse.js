import React from 'react'
import Card from './Card'
import CartPreview from "./CartPreview";
// import { Grid } from "semantic-ui-react";

class Browse extends React.Component{
    render() {
        return(
            <div>
                <CartPreview cart={this.props.cart} cartTotal={this.props.cartTotal} removeFromCart={this.props.removeFromCart} />
                <div class="ui grid container">
                {this.props.bikes.map(bike => <Card 
                    key={bike.id}
                    bike={bike}
                    addToCart={this.props.addToCart}
                />)}
                </div>
            </div>
        )
    }
}

export default Browse
import React from 'react'

class CartCard extends React.Component{

    render() {
        let bike = this.props.bike
        return(
            <div class="right floated five wide column">
                <div class="ui divided items">
                    <div class="item">
                        <div class="image">
                            <img src={bike.image}></img>
                        </div>
                        <div class="content">
                            <a class="header">{bike.model}</a>
                                <div class="meta">
                                    <span class="build">{"Build: " + bike.build}</span>
                                </div>
                                <div class="meta">
                                    <span class="manufacturer">{"Manufacturer: " + bike.manufacturer}</span>
                                </div>

                            <div class="price">
                                <i class="dollar sign icon"></i>
                                {bike.price}
                            </div>
                            <div class="extra">
                                <button onClick={() => this.props.removeFromCart(bike)} class="negative ui button">Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartCard
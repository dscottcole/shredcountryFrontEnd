import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


class CartCard extends React.Component{

    render() {
        let bike = this.props.bike
        return(
            <div class="five wide column">
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
                                <Button onClick={() => this.props.removeFromCart(bike)} negative animated='horizontal'>
                                    <Button.Content hidden>Remove</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='trash alternate icon' />
                                    </Button.Content>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartCard
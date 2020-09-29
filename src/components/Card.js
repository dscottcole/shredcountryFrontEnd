import React from "react";

class BikeCard extends React.Component{

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState(prevState => ({
        clicked: !prevState.clicked
        }));
    }

    handleCartAddition = (bikeObj) => {
        this.props.addToCart(bikeObj)
    }

    render() {
        let bike = this.props.bike

        let notClicked = (
            <div class="five wide column">          
                <div onClick={() => this.handleClick()} class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img src={bike.image}></img>
                        </div>
                    <div class="content">
                        <div class="header">{bike.model + " " + bike.build}</div>
                        <div class="meta">
                            <a>{bike.manufacturer}</a>
                        </div>
                        <div class="meta">
                            <a>{"Size: " + bike.size}</a>
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            <i class="bicycle icon"></i>
                            {bike.bike_type}
                        </span>
                        <span>
                            <i class="dollar sign icon"></i>
                            {bike.price}
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        )

        let clicked = (
            <div class=" four wide column">
                <div onClick={() => this.handleClick()} class="ui link cards">
                    <div class="card">
                        <div class="image">
                            <img src={bike.image}></img>
                        </div>
                    <div class="content">
                        <div class="header">{bike.model + " " + bike.build}</div>
                        <div class="meta">
                            <a>{bike.manufacturer}</a>
                        </div>
                        <div class="meta">
                            <a>{"Size: " + bike.size}</a>
                        </div>
                        <div class="description">
                            <a>{bike.details}</a>
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                        <div onClick={() => this.handleCartAddition(bike)} class="ui horizontal animated button" tabIndex="0">
                            <div class="hidden content">Add</div>
                            <div class="visible content">
                                <i class="shop icon"></i>
                            </div>
                        </div>
                        </span>
                        <div>
                        </div>
                        <span>
                            <i class="dollar sign icon"></i>
                            {bike.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        )

        return(
            this.state.clicked? clicked : notClicked
        )
    }
}

export default BikeCard
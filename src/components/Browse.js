import React from 'react'
import Card from './Card'
import CartPreview from "./CartPreview";
import FilterMenu from "./FilterMenu";


class Browse extends React.Component{

    state = {
        bikes: [],
        searchTerm: '',
        sizeToFilter: '',
        typeFilter: '',
        comboBikes: []
    }

    componentDidMount = () => {
        this.setBikes()
    }

    componentDidUpdate = (previousProps) => {
        if (previousProps !== this.props) {
            this.setBikes()
        }
    }

    setBikes = () => {
        this.setState({ bikes: this.props.bikes })
    }

    searchBikes = (string) => {
        this.setState({
          searchTerm: string
        }, this.comboFilter())
    }

    sizeSelection = (size) => {
        this.setState({sizeToFilter: size}, this.comboFilter)
    }

    typeSelection = (type) => {
        this.setState({typeFilter: type}, this.comboFilter)
    }

    comboFilter = () => {
        let baikas = this.state.bikes

        if (this.state.searchTerm !== '') {
            let currentBikes = baikas.filter(bike => {
                return bike.manufacturer.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            baikas = currentBikes
        }

        if (this.state.sizeToFilter !== "") {
            let currentBikes = baikas.filter(bike => {
                return bike.size === this.state.sizeToFilter
            })
            baikas = currentBikes
        }

        if (this.state.typeFilter !== "") {
            let currentBikes = baikas.filter(bike => {
                return bike.bike_type === this.state.typeFilter
            })
            baikas = currentBikes
        }

        this.setState({ comboBikes: baikas })
        
    }

    render() {

        let unfilteredBikeCards = (
            <div class="ui grid container">
            {this.state.bikes.map(bike => <Card 
                key={bike.id}
                bike={bike}
                addToCart={this.props.addToCart}
            />)}
            </div>
        )

        let filteredBikeCards = (
            <div class="ui grid container">
            {this.state.comboBikes.map(bike => <Card 
                key={bike.id}
                bike={bike}
                addToCart={this.props.addToCart}
            />)}
            </div>
        )

        return(
            <div class="browse">
                <FilterMenu searchBikes={this.searchBikes} sizeSelection={this.sizeSelection} typeSelection={this.typeSelection} />
                {this.state.comboBikes.length !== 0? filteredBikeCards : unfilteredBikeCards}
                <CartPreview cart={this.props.cart} cartTotal={this.props.cartTotal} removeFromCart={this.props.removeFromCart} />
            </div>
        )
    }
}

export default Browse
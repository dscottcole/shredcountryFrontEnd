import React from 'react'
import { Grid } from 'semantic-ui-react'
import OrderCard from './OrderCard'

class Orders extends React.Component {

    state = {
        orders: []
    }

    componentDidMount = () => {
        this.getOrders()
    }

    getOrders = () => {
        fetch('http://localhost:3000/orders', {
            method: 'GET',
            headers: {
                "Application-Type": "application/json",
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(orders => this.setOrders(orders))
    }

    setOrders = (ordersArg) => {
        if (ordersArg.length > 0) {
            this.setState({ orders: ordersArg, noOrders: false })
        } else {
            this.setState({noOrders: true})
        }
    }

    render() {
        let orders = this.state.orders
        
        let allOrders = (
            <Grid celled='internally'>
                {orders.map(order => <OrderCard 
                key={order.id}
                order={order}
                showOrder={this.showOrder}
                />)}
            </Grid>
        )

        let zeroOrders = (
            <div>
                <h1> You do not have any existing orders. </h1>
            </div>
        )
        
        return (
            orders.length > 0 ? allOrders : zeroOrders
        )
    }

}

export default Orders
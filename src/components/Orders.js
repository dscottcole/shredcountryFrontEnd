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
        this.setState({ orders: ordersArg })
    }

    render() {
        let orders = this.state.orders

        
        return (

            <Grid celled='internally'>
                    {orders.map(order => <OrderCard 
                    key={order.id}
                    order={order}
                    showOrder={this.showOrder}
                />)}
            </Grid>

        )
    }

}

export default Orders
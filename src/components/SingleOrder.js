import React from 'react'
import SingleOrderCard from './SingleOrderCard'
import { Grid, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class SingleOrder extends React.Component{

    state = {
        order: {},
        error: ""
    }

    componentDidMount = () => {
        this.getOrder()
    }
    
    getOrder = () => {
        let id = parseInt(window.location.pathname.slice(8))

        fetch(`http://localhost:3000/orders/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(order => {
            if (order.id != undefined) {
                this.setOrder(order)
            } else {
                this.setState({ "error": order['message'] })
            }

        })
    }
    
    setOrder = (orderArg) => {
        this.setState({ order: orderArg })
    }

    cancelOrder = (id) => {
        fetch(`http://localhost:3000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                this.props.history.push('/orders')
            } else {
                this.setState({ "error": res['message'] })
            }
        })
    }

    modifyOrder = (canceledBike) => {

        let id = parseInt(window.location.pathname.slice(8))

        let goneBike = {
            "order": {
              "bike_id": canceledBike.id
            }
        }

        fetch(`http://localhost:3000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(goneBike)
        })
        .then(res => res.json())
        .then(order => {
            if (order.id) {
                this.setState({order: order})
            } else {
                this.setState({ "error": order['message'] })
            }
        })
    }


    render() {
        let errorMessage = (
            <Message
            warning
            header='Error!'
            list={[
                this.state.error
            ]}
            />
        )
        return(
            <Grid warning celled='internally'>
                    {this.state.order.id !== undefined ? <SingleOrderCard order={this.state.order} cancelOrder={this.cancelOrder} modifyOrder={this.modifyOrder}/> : null }
                    {this.state.error !== "" ? errorMessage : null}
            </Grid>
        )
    }
}

export default withRouter(SingleOrder)
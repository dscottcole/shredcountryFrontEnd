import React from 'react'
import { Button, Icon, Grid, Container, Header } from 'semantic-ui-react'
import OrderCardBikeCard from './OrderCardBikeCard'
import { withRouter } from 'react-router-dom'


class OrderCard extends React.Component{

    showOrder = (id) => {
        console.log(id)
        
        this.props.history.push(`/orders/${id}`)
    }

    render() {
        let order = this.props.order

        return(
            <Grid.Row>
                <Container left text>
                    <Header as='h2'>{"Order Number: " + order.id}</Header>
                    <p>{"Order Total: $" + order.order_total}</p>
                    <Button onClick={() => this.showOrder(order.id)} animated='horizontal'>
                        <Button.Content hidden>Options</Button.Content>
                        <Button.Content visible>
                            <Icon name='compose' />
                        </Button.Content>
                    </Button>
                </Container>
            <Grid.Column width={10}>
                {order.bikes.map(bike => <OrderCardBikeCard
                    key={bike.id}
                    bike={bike}
                />)}

            </Grid.Column>
            </Grid.Row>
        )
    }
}

export default withRouter(OrderCard)
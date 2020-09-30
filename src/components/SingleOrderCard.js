import React from 'react'
import { Button, Icon, Grid, Container, Header } from 'semantic-ui-react'
import SingleOrderCardBikeCard from './SingleOrderCardBikeCard'
import { withRouter } from 'react-router-dom'


class SingleOrderCard extends React.Component{

    render() {
        let order = this.props.order

        return(
            <Grid.Row>
                <Container left text width={4}>
                    <Header as='h2'>{"Order Number: " + order.id}</Header>
                    <p>{"Order Total: $" + order.order_total}</p>
                    <Button onClick={() => this.props.cancelOrder(order.id)} negative animated='vertical'>
                        <Button.Content hidden>Cancel</Button.Content>
                        <Button.Content visible>
                            <Icon name='delete' />
                        </Button.Content>
                    </Button>
                </Container>
            <Grid.Column width={10}>
                {order.bikes.map(bike => <SingleOrderCardBikeCard
                    key={bike.id}
                    bike={bike}
                    modifyOrder={this.props.modifyOrder}
                />)}
            </Grid.Column>
            </Grid.Row>
        )
    }
}

export default withRouter(SingleOrderCard)
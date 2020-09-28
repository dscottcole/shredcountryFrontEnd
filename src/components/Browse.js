import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Item from './Item'

class GridExampleColumns extends React.Component{
    render() {
        return(
            <Grid>
                    {this.props.bikes.map(bike => <Item 
                        key={bike.id}
                        bike={bike}
                    />)}
            </Grid>
        )
    }
}

export default GridExampleColumns


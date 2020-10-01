import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Home = () => (
    <div>
        <div class="welcome"> 
        </div>

        <Grid class='home'>
            <Grid.Row columns={4}>
            <Grid.Column>
            <Image className="partnerlogo-one" src={require('../Images/sc3.jpg')} />
            </Grid.Column>
            <Grid.Column>
            <Image className="partnerlogo-two" src={require('../Images/spesh2.png')} />
            </Grid.Column>
            <Grid.Column>
            <Image className="partnerlogo-three" src={require('../Images/ibis.png')} />
            </Grid.Column>
            <Grid.Column>
            <Image className="partnerlogo-four" src={require('../Images/pivot.png')} />
            </Grid.Column>
            </Grid.Row>
            <h1 class="done">Partnering with the best high-end shredsled manufacturers.</h1>
        </Grid>
                
    </div>

)


export default Home
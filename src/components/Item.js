import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const paragraph = <ge src='/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = (props) => (
  <Item.Group divided>
    <Item>
      <Item.Image src={props.bike.image} />

      <Item.Content>
        <Item.Header as='a'>{props.bike.model}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{props.bike.manufacturer}</span>
        </Item.Meta>
        <Item.Description>{props.bike.details}</Item.Description>
        <Item.Description>{"$" + props.bike.price}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Add To Cart
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleDivided
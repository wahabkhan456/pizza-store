import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice, formatToppings } from '../helpers';

const Pizza = ({ details, addToOrder, index }) => {
  const { name, toppings, image, price } = details;

  return (
    <Grid.Column mobile={5} tablet={8} computer={5}>
      <Segment id='pizza-card' raised>
        <Image src={image} />
        <Header as='h3'>{name}</Header>
        <p>{formatToppings(toppings)}</p>
        <div id='pizza-order-info'>
          <Header as='h3'>{formatPrice(price)}</Header>
          <p>
            <Button onClick={() => addToOrder(index)} color='teal'>Add to order</Button>
          </p>
        </div>

      </Segment>
    </Grid.Column>
  )
}

Pizza.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired
}

export default Pizza;

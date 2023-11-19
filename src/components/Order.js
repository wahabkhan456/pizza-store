import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Segment, Icon } from 'semantic-ui-react';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';

const Order = ({
  addToOrder,
  removeFromOrder,
  order
}) => {

  const renderOrder = (key) => {
    const pizza = PizzaList[key];
    const count = order[key];

    return (
      <Segment raised key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={pizza.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p id='order-pizza-name'>{pizza.name}</p>
              <p><strong>{formatPrice(pizza.price)}</strong></p>
              <p>
                <Icon name='minus' circular id="order-minus" onClick={() => removeFromOrder(key)} /> Quantity: {count}
                <Icon name='plus' circular id="order-plus" onClick={() => addToOrder(key)} />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  const orderIds = Object.keys(order);

  return (
    <div>
      {orderIds.map(renderOrder)}
    </div>
  );

}

Order.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  removeFromOrder: PropTypes.func.isRequired,
  order: PropTypes.array
}

export default Order;

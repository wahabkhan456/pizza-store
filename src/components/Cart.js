import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Header } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

import NavBar from './NavBar';
import Order from './Order';
import Footer from './Footer';

const Cart = ({
  orderTotal,
  order,
  addToOrder,
  removeFromOrder,
  updateCheckoutTotal
}) => {

  const totalPizzaPrice = orderTotal;
  const checkoutTotal = totalPizzaPrice;

  if (orderTotal === 0) {
    return (
      <Fragment>
        <NavBar orderTotal={orderTotal} />
        <Container id='page-container'>
          <Header as='h1' id='page-header'>Your Order</Header>
          <Container id='cart-empty-box'>
            <p id='cart-empty-text'>Your cart is empty. Add some pizzas <span role='img' aria-label='pizza'>🍕🍕🍕</span></p>
            <Button as={Link} to='/menu' color='teal' size='large'>Go to Menu</Button>
          </Container>
        </Container>
        <Footer />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <NavBar orderTotal={orderTotal} />
      <Container id='page-container'>
        <Container id='cart-header'>
          <Header as='h1' id='page-header'>Your Cart</Header>
          <Button as={Link} to='/menu' color='teal' size='large' id='cart-menu-btn'>Back to Menu</Button>
        </Container>
        <Container id='order-box'>
          <Order
            order={order}
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
          />
          <Container id='cart-total'>
            <p>Order: <strong>{formatPrice(totalPizzaPrice)}</strong></p>
            <p>Total: <strong>{formatPrice(checkoutTotal)}</strong></p>
            <Button as={Link} to='/checkout' id='cart-checkout-btn' color='teal' onClick={() => updateCheckoutTotal(checkoutTotal)}>Go to Payment</Button>
          </Container>
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );
}

Cart.propTypes = {
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired,
  removeFromOrder: PropTypes.func.isRequired,
  order: PropTypes.array,
  updateCheckoutTotal: PropTypes.func.isRequired,
}

export default Cart;

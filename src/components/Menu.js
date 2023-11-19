import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import NavBar from './NavBar';
import Footer from './Footer';
import PizzaContainer from './PizzaContainer';

const Menu = ({
  order,
  orderTotal,
  addToOrder
}) => (
    <Fragment>
      <NavBar order={order} orderTotal={orderTotal}>
        {orderTotal > 0 && <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>}
      </NavBar>
      <Container id='page-container'>
        <Header as='h1' id='page-header'>Pizza Selection</Header>
        <Container id='menu-pizza-container'>
          <PizzaContainer addToOrder={addToOrder} />
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );

Menu.propTypes = {
  order: PropTypes.array,
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired
};

export default Menu;

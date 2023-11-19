import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const NavBar = ({ orderTotal, children }) => {

  return (
    <Menu fixed='top' borderless id='navbar'>
      <Container>
        <Menu.Item as={Link} to='/menu' id='navbar-header'>Pizza App</Menu.Item>
        <Menu.Item id='navbar-total' position='right'>
          <Icon name='cart' />
          {formatPrice(orderTotal)}
          {children}
        </Menu.Item>
      </Container>
    </Menu>
  )
}

NavBar.propTypes = {
  orderTotal: PropTypes.number
}

export default NavBar;

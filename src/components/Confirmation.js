import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Header, Menu, Button } from 'semantic-ui-react';

import Footer from './Footer';

const Confirmation = ({ clearState, customerDetails }) => {
  const [newOrder, setNewOrder] = useState(false);

  const handleClick = () => {
    clearState();
    setNewOrder(true);
  }

  if (newOrder) {
    return <Redirect push to='/' />;
  }

  const { lastName, address, packagee } = customerDetails;

  return (
    <Fragment>
      <Menu secondary id='navbar'>
        <Menu.Item header id='navbar-header'>Pizza App</Menu.Item>
      </Menu>
      <Container textAlign='center' id='confirmation-container'>
        <Header as='h1' id='page-header'>Thanks, {lastName}!</Header>
        <p id='confirmation-text'>Your order, <strong>#2222</strong> is now being prepped and will be delivered to: </p>
        <p><strong>{address}</strong></p>
        <p><strong>ll{packagee}</strong></p>
        <p>within the next hour <span role='img' aria-label='motorcycle'>🛵</span> </p>
        <Button onClick={handleClick} color='teal' size='large' id='confirmation-new-btn'>Start a fresh order</Button>
      </Container>
      <Footer />
    </Fragment>
  )
};

Confirmation.propTypes = {
  customerDetails: PropTypes.object,
  clearState: PropTypes.func.isRequired
}

export default Confirmation;

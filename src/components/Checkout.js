import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';
import { Grid, Container, Header, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

import NavBar from './NavBar';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentForm from './PaymentForm';
import Footer from './Footer';

const Checkout = ({
  customerDetails,
  checkoutTotal,
  order,
  orderTotal,
  updateCustomerDetails,
  loadSampleCustomer
}) => {

  const [state, setState] = useState({
    customerForm: false,
    paymentForm: false,
    completedForm: false
  });

  const checkPaymentForm = (bool) => {
    setState(prevState => ({ ...prevState, paymentForm: bool }));
  }

  const checkCustomerForm = () => {
    const { fname, lname, email, contact, address } = customerDetails;

    if (fname && lname && email && contact && address) {
      setState(prevState => ({ ...prevState, customerForm: true }));
    }
    else {
      setState(prevState => ({ ...prevState, customerForm: false }));
    }
  }

  const handleSubmit = async () => {
    checkCustomerForm();
    setState(prevState => ({ ...prevState, customerForm: true }));
    if (state.customerForm || state.paymentForm) {
      try {
        const result = await fetch(`https://add-cart.herokuapp.com/order`, {
          method: "Post",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            total: checkoutTotal,
            order: JSON.stringify(order),
            ...customerDetails
          })
        })
        const resp = await result.json();
        console.warn(resp);
        alert('Order Placed Successfully! We\'ll be there in 30 mins!');
        setState(prevState => ({ ...prevState, completedForm: true }));
      } catch (err) {
        console.log(err);
      }
    } else {
      setState(prevState => ({ ...prevState, completedForm: false }));
    }
  }

  console.log(order);
  if (state.completedForm) {
    return <Redirect push to='/confirmed' />;
  }

  return (
    <Fragment>
      <NavBar orderTotal={orderTotal} />
      <Container id='page-container'>
        <Header as='h1' id="page-header">Checkout</Header>
        <Grid stackable columns={2}>
          <Grid.Column width={10}>
            <Header as='h3' id='checkout-subheader'>Your Details</Header>
            <CustomerDetailsForm
              customerDetails={customerDetails}
              updateCustomerDetails={updateCustomerDetails}
              loadSampleCustomer={loadSampleCustomer}
              formStatus={checkCustomerForm}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h3' id='checkout-subheader'>Payment</Header>
            <Elements>
              <PaymentForm formStatus={checkPaymentForm} />
            </Elements>
            <Button color='teal' size='large' id='checkout-btn' onClick={handleSubmit}>Place Order & Pay {formatPrice(checkoutTotal)} </Button>
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  )
}

Checkout.propTypes = {
  order: PropTypes.array,
  orderTotal: PropTypes.number,
  customerDetails: PropTypes.object,
  loadSampleCustomer: PropTypes.func.isRequired,
  updateCustomerDetails: PropTypes.func.isRequired,
  checkoutTotal: PropTypes.number
}

export default Checkout;
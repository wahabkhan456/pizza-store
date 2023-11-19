import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import { PizzaList } from '../data/pizzas';
import { sampleCustomer } from '../data/sampleCustomer';

import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

const App = () => {
  const [state, setState] = useState({
    order: [],
    orderTotal: 0,
    checkoutTotal: 0,
    postcode: '',
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      contactNum: '',
      address: '',
    }
  });

  useEffect(() => {
    const localStorageOrder = window.localStorage.getItem('order');
    const localStorageOrderAmount = window.localStorage.getItem('orderAmount');
    const localStorageTotal = window.localStorage.getItem('total');
    const localStorageCustomerDetails = window.localStorage.getItem('customerDetails');
    if (localStorageOrder) {
      setState(prevState => ({
        ...prevState,
        order: JSON.parse(localStorageOrder),
        orderTotal: JSON.parse(localStorageOrderAmount),
        checkoutTotal: JSON.parse(localStorageTotal),
        customer: JSON.parse(localStorageCustomerDetails)
      }));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('order', JSON.stringify(state.order));
    window.localStorage.setItem('orderAmount', JSON.stringify(state.orderTotal));
    window.localStorage.setItem('total', JSON.stringify(state.checkoutTotal));
    window.localStorage.setItem('customerDetails', JSON.stringify(state.customer));
  }, [state])

  const addToOrder = (key) => {
    const order = { ...state.order };
    order[key] = order[key] + 1 || 1;
    const newTotal = state.orderTotal + PizzaList[key].price;

    setState(prevState => ({
      ...prevState,
      order: order,
      orderTotal: newTotal
    }));
  }

  const removeFromOrder = (key) => {
    const order = { ...state.order };
    order[key] = order[key] - 1;
    let newTotal = state.orderTotal - (PizzaList[key].price);

    if (order[key] === 0) {
      newTotal = state.orderTotal - PizzaList[key].price;
      delete order[key];
    }

    setState(prevState => ({
      ...prevState,
      order: order,
      orderTotal: newTotal
    }));
  }

  const updateCheckoutTotal = (newTotal) => {
    setState(prevState => ({
      ...prevState,
      checkoutTotal: newTotal
    }));
  }

  const updateCustomerDetails = (updatedCustomerDetails) => {
    let customerDetails = { ...state.customer };
    customerDetails = updatedCustomerDetails;
    setState(prevState => ({
      ...prevState,
      customer: customerDetails
    }));
  }

  const updatePostcode = (newPostcode) => {
    setState(prevState => ({
      ...prevState,
      postcode: newPostcode
    }));
  }

  const loadSampleCustomer = () => {
    setState(prevState => ({ ...prevState, customer: sampleCustomer }))
  }

  const clearState = () => {
    setState({
      order: [],
      orderTotal: 0,
      checkoutTotal: 0,
      postcode: '',
      customer: {
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        address: '',
      }
    });
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) =>
          <Menu {...props}
            orderTotal={state.orderTotal}
            addToOrder={addToOrder}
            order={state.order} />} />
        <Route exact path='/menu' render={(props) =>
          <Menu {...props}
            orderTotal={state.orderTotal}
            addToOrder={addToOrder}
            order={state.order} />} />
        <Route exact path='/cart' render={(props) =>
          <Cart {...props}
            orderTotal={state.orderTotal}
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            order={state.order}
            updateCheckoutTotal={updateCheckoutTotal} />} />
        <Route exact path='/checkout' render={(props) =>
          <StripeProvider apiKey='pk_test_12345'>
            <Checkout {...props}
              orderTotal={state.orderTotal}
              customerDetails={state.customer}
              checkoutTotal={state.checkoutTotal}
              order={state.order}
              updateCustomerDetails={updateCustomerDetails}
              loadSampleCustomer={loadSampleCustomer} />
          </StripeProvider>}
        />
        <Route exact path='/confirmed' render={(props) =>
          <Confirmation {...props}
            customerDetails={state.customer}
            clearState={clearState}
          />
        }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
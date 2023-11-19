import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Segment } from 'semantic-ui-react';

const CustomerDetailsForm = ({
  customerDetails,
  updateCustomerDetails,
  loadSampleCustomer
}) => {

  const handleChange = (e) => {
    const updateCustomer = {
      ...customerDetails,
      [e.currentTarget.name]: e.target.value
    }
    updateCustomerDetails(updateCustomer);
  }

  const { fname, lname, email, contact, address, offer } = customerDetails;
  console.warn(offer);
  return (
    <div>
      <Button size='tiny' color='teal' onClick={loadSampleCustomer}>
        <span role='img' aria-label='man-with-beard'>🧔🏻‍</span> Fill with fake customer</Button>
      <Segment>
        <Form id='checkout-customer-form'>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='First name'
              type='text'
              placeholder='First name'
              name='fname'
              value={fname}
              onChange={handleChange}
              required />
            <Form.Input
              fluid
              label='Last name'
              type='text'
              placeholder='Last name'
              name='lname'
              value={lname}
              onChange={handleChange}
              required />
          </Form.Group>

          <Form.Input
            label='Email'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
            required />
          <Form.Input
            label='Contact No.'
            type='tel'
            placeholder='Contact No.'
            name='contact'
            value={contact}
            onChange={handleChange}
            required />
          <Form.Input
            label='Address'
            type='text'
            placeholder='Address'
            name='address'
            value={address}
            onChange={handleChange}
            required />

          <select name="offer" onChange={handleChange}>
            <option value="NaN" disabled>Select Here Offer</option>
            <option value="facebook">Facebook</option>
            <option value="amazon">Amazon</option>
            <option value="infoys">Infoys</option>
            <option value="noOffer">No Offer</option>
          </select>
        </Form>
      </Segment>
    </div>
  );
}

CustomerDetailsForm.propTypes = {
  customerDetails: PropTypes.object,
  loadSampleCustomer: PropTypes.func.isRequired,
  updateCustomerDetails: PropTypes.func.isRequired,
}

export default CustomerDetailsForm;

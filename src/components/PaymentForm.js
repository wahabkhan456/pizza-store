import React, { useState } from 'react';
import { injectStripe, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import { Form, Button, Segment, Modal } from 'semantic-ui-react';

const PaymentForm = ({ formStatus, fontSize }) => {

  const [state, setState] = useState({
    cardNumber: false,
    cardExpiry: false,
    cvc: false
  })

  const stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      setState(prevState => ({ ...prevState, [name]: true }));
    } else {
      setState(prevState => ({ ...prevState, [name]: false }));
    }

    const { cardNumber, cardExpiry, cvc } = state;

    if (cardNumber && cardExpiry && cvc) {
      formStatus(true);
    } else {
      formStatus(false);
    }
  }

  const createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          '::placeholder': {
            color: '#aab7c4',
          },
          padding,
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

  return (
    <div>
      <Modal trigger={<Button size='tiny' color='teal'><span role='img' aria-label='credit-card'>💳 </span>Use test card</Button>} closeIcon>
        <Modal.Header>Test Card Details</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p><strong>Card number:</strong> 4242424242424242</p>
            <p><strong>Expiration date:</strong> 12/20</p>
            <p><strong>CVC:</strong> 123</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <Segment>
        <Form>
          <label>
            Card number
              <CardNumberElement
              {...createOptions(fontSize)}
              options={{ creditCard: true }}
              onChange={(element) => stripeElementChange(element, 'cardNumber')}
            />
          </label>
          <label>
            Expiration date
              <CardExpiryElement
              {...createOptions(fontSize)}
              onChange={(element) => stripeElementChange(element, 'cardExpiry')}
            />
          </label>
          <label>
            CVC
              <CardCVCElement
              {...createOptions(fontSize)}
              onChange={(element) => stripeElementChange(element, 'cvc')}
            />
          </label>
        </Form>
      </Segment>
    </div>
  );
}

export default injectStripe(PaymentForm);

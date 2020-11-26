import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements} = this.props;
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

ReactDOM.render(<PaymentForm />, document.body);
export default PaymentForm;

// pk_test_51HrL7iGiJV38xUJYGL9tfVyiRMpL2PzAeBe2ZX2YKY0txDgnmcI35i1ppwqY6iad6Y1vUTSMxhfXgof71BfO39aK00gTC1U3Ds
// sk_test_51HrL7iGiJV38xUJYPJOHBOMjE9FAGatASjRFlcrb46ivxLpJvGzFCXYRknOh3Dsx124WNNTq2mCjkTSskHjn1AYx007uQN08cp
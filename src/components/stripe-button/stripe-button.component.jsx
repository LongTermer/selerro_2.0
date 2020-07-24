import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as logo from '../../assets/selerro-big-logo.png';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_R7vs6Pv7FSS5SMKX2LkBCzhI007HeaYZo4';

  return (
    <StripeCheckout
      className='custom-button'
      billingAddress
      shippingAddress
      label='Buy Now'
      name='Stripe Electronics, Inc.'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Buy Now'
      image={logo}
      token={() => {}}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(StripeCheckoutButton);

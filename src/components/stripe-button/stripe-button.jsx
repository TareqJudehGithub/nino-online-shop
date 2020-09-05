import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ( {price} ) => {
     const priceForStripe = price * 100;  //because Stripe display amounts in cents.
     const publishableKey = "pk_test_YXpV5Dm8rG7rmDxLlR9NWhyS00u9QKlt90";
     const onToken = (token) => {
          alert("Payment Successful");
     };

     return (
          <div>
               <StripeCheckout 
               label="Checkout with Stripe"
               name= "Nino's Online Shop"
               billingAddress
               shippingAddress
               image=""
               description={`Total $${price}`}
               amount={priceForStripe}
               panelLabel="Place order"
               token={onToken} //on success call back after submission.
               stripeKey={publishableKey}
               />
          </div>
     )
}

export default StripeCheckoutButton;

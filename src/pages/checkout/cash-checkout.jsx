import React from 'react'

const CashCheckout = () => {
     return (
          <div>
               <h2>Order Details</h2>
               <div className="order-summary">
                    <div>
                         <h4>Shipping Address</h4>
                         {/* <ShippingAddress /> */}
                    </div>
                    
                    <div>
                         <span>Payment Method</span>
                         <span>Cash on Delivery</span>
                    </div>
                    <div className="order-summary">
                         <h4>Order Summary</h4>
                         {/* <OrderSummary />
                         <span>Items total {itemsTotal}</span>
                         <span>Shipping {"&"} Handling: </span>
                         <span>Total before tax: {itemsTotal}</span>
                         <span>Estimated tax {tax}</span>
                         <h4>Grand Total:  {grandTotal}</h4> */}
                         
                    </div>
               </div>
          </div>
     )
}

export default CashCheckout;

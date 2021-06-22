import React from "react";
import ShoppingCart from './shoppingcart.js';

  class HeaderShop extends React.Component {
    render() {
      return (
           <header>
        <ShoppingCart quantity={this.props.quantity}
          amountToPay={this.props.amountToPay} />  
      </header>
      )
    }
  }
  
  export default HeaderShop
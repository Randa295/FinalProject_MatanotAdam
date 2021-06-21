import React from "react";
import ShoppingCart from './shoppingcart.js';
import Navigation from './navigation.js'

  class HeaderShop extends React.Component {
    render() {
      return (
           <header>
        <Navigation />
        <ShoppingCart quantity={this.props.quantity}
          amountToPay={this.props.amountToPay} />  
      </header>
      )
    }
  }
  
  export default HeaderShop
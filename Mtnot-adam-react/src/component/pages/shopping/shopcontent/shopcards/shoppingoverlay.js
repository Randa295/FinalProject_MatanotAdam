import React from "react";
import ShoppingCartProduct from './shoppingcartproduct.js';

class ShoppingCartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.updateAmountToPay = this.updateAmountToPay.bind(this);
  }
  closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  }
  updateAmountToPay(item) {
    this.forceUpdate();
  }
  render() {
    let itemsInCart = this.props.data.itemsInCart.map((item, index) => {
      // Return key which defines an order of items inside a cart. The order in a cart is different than in database
      return <ShoppingCartProduct key={index} 
               item={item}
               indexInCart={index}
               removeFromCart={this.props.removeFromCart}
               updateAmountToPay={this.updateAmountToPay} />  
    });
    let amountToPay = 0;
    for (let i=0; i<this.props.data.items.length; i++) {
      amountToPay += this.props.data.items[i].price * this.props.data.items[i].quantityInCart;
    }
    return (
      <div id="overlay">
        <section id="shopping-cart">
          <div id="cart-header">
            <span id="cart-title">סל קניות</span>
            <i className="fa fa-times"
              onClick={this.closeOverlay.bind(this)}></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>מוצר</th>
                <th>שם</th>
                <th>מחיר</th>
                <th>כמות</th>
                <th>סך הכל</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemsInCart}
            </tbody>
          </table>
          <span id="empty-cart">{(itemsInCart.length == 0) ? "הסל שלך עדיין ריק" : ""}</span>
          <h3 id="cart-total">סכ"ה בעגלה</h3>
          <div id="totals">
            <span>Cart Totals</span>
            <span>מספר מוצרים: {this.props.data.quantity}</span>
            <span>Total: ₪{amountToPay}</span>
          </div>
          <button id="checkout" 
            disabled={itemsInCart.length == 0 ? true : false} >Checkout</button>
        </section>
      </div>
    )  
  }
}
  export default ShoppingCartOverlay

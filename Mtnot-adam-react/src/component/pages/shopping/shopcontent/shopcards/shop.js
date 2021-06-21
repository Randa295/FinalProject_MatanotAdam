import React from "react";
import ShoppingCartOverlay from './shoppingoverlay.js';
import ProductList from './productslist.js';
import  HeaderShop from './headershop.js';


const shoppingProducts = [
  {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"/img/(13).jpg", quantityInCart: 0, inCart: false}, 
  {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"/img/(11).jpg", quantityInCart: 0, inCart: false},
  {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"/img/(12).jpg", quantityInCart: 0, inCart: false}
];


class ShoppingCartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shoppingProducts,
      quantity: 0,
      amountToPay: 0,
      itemsInCart: []
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(item) {
    let itemsInCart = this.state.itemsInCart;
    itemsInCart.push(this.props.items[item.id]);
    shoppingProducts[item.id].inCart = true;
    shoppingProducts[item.id].quantityInCart = 1;
    this.setState({
      quantity: this.state.quantity + 1,
      amountToPay: this.state.amountToPay + this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  removeFromCart(item, indexInCart) {
    let itemsInCart = this.state.itemsInCart;
    shoppingProducts[item.id].inCart = false;
    shoppingProducts[item.id].quantityInCart = 0;
    itemsInCart.splice(indexInCart, 1);
    this.setState({
      quantity: this.state.quantity - 1,
      amountToPay: this.state.amountToPay - this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  render() {
    return (
      <main>
        < HeaderShop quantity={this.state.quantity}
          amountToPay={this.state.amountToPay} />
        <ShoppingCartOverlay data={this.state}
          removeFromCart={this.removeFromCart} />
        <ProductList items={this.state.items}
          addToCart={this.addToCart} />
      </main>
    )
  }
}

export default ShoppingCartApp
import React from "react";
import Product from './product.js'

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  } 
    render() {       

      let items = this.props.items.map((item, index) => {
        return <Product key={item.id}
                 item={item}
                 addToCart={this.props.addToCart} />

                });
      return (
        <section id="list">
          {items}
        </section>

      )
    }
  }
  export default ProductList
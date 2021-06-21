import React from 'react';
import  ShoppingCartApp from './shopcards/shop.js';

class Content extends React.Component{
  constructor(props) {
   super(props);
}

  render(){
    return(
      <div className="ml-5">
       < ShoppingCartApp data={this.props.data} />
      </div>
  )}
}


export default Content
